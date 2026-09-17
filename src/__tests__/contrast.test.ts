import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const css = readFileSync('src/index.css', 'utf8');

/** Reads a token's value from the light block or the dark block. */
const token = (name: string, dark: boolean) => {
  const start = dark
    ? css.indexOf(":root[data-theme='dark'] {")
    : css.indexOf('@theme {');
  const block = css.slice(start, css.indexOf('\n}', start));
  const match = block.match(new RegExp(`--color-${name}: *(#[0-9a-f]{6})`));
  if (!match)
    throw new Error(
      `--color-${name} missing from ${dark ? 'dark' : 'light'} block`
    );
  return match[1];
};

const luminance = (hex: string) => {
  const channels = [1, 3, 5].map(
    (i) => parseInt(hex.slice(i, i + 2), 16) / 255
  );
  const [r, g, b] = channels.map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: string, b: string) => {
  const [la, lb] = [luminance(a), luminance(b)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};

// [foreground, background, minimum ratio]
const PAIRS: [string, string, number][] = [
  ['ink', 'surface', 7], // body text: AAA
  ['ink', 'card', 7],
  ['muted', 'card', 4.5], // secondary text: AA
  ['muted', 'surface', 4.5],
  ['on-primary', 'primary', 4.5],
  ['error', 'card', 4.5],
];

describe.each([
  ['light', false],
  ['dark', true],
])('%s theme contrast', (_name, dark) => {
  it.each(PAIRS)('%s on %s meets %s:1', (fg, bg, minimum) => {
    const ratio = contrast(token(fg, dark), token(bg, dark));
    expect(ratio).toBeGreaterThanOrEqual(minimum);
  });
});

describe.each([
  ['light', false],
  ['dark', true],
])('%s theme surfaces', (_name, dark) => {
  it('keeps cards distinguishable from the page', () => {
    const ratio = contrast(token('card', dark), token('surface', dark));
    expect(ratio).toBeGreaterThan(1.05);
  });

  it('keeps the hover state visible on both surfaces', () => {
    // Softening the page once made hover and page identical (1.001:1),
    // which left hover invisible outside cards.
    for (const under of ['card', 'surface']) {
      const ratio = contrast(token('hover', dark), token(under, dark));
      expect(ratio, `hover on ${under}`).toBeGreaterThan(1.03);
    }
  });

  it('avoids pure black and pure white surfaces', () => {
    // Maximum contrast (21:1) causes halation, worst for astigmatism.
    for (const name of ['card', 'surface', 'ink']) {
      expect(['#ffffff', '#000000']).not.toContain(token(name, dark));
    }
  });
});
