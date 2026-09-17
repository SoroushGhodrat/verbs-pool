import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const componentFiles = walk('src').filter(
  (f) =>
    f.endsWith('.tsx') && !f.includes('__tests__') && !f.includes('test-utils')
);

describe('colour tokens', () => {
  it('uses semantic tokens rather than raw hex in components', () => {
    const offenders = componentFiles.filter((file) =>
      /#[0-9a-fA-F]{6}/.test(readFileSync(file, 'utf8'))
    );
    expect(offenders).toEqual([]);
  });

  it('does not reintroduce bg-white or text-black surfaces', () => {
    // `text-white` on a coloured ground is fine; `bg-white` and `text-black`
    // are not, because neither can respond to the theme.
    const offenders = componentFiles.filter((file) =>
      /\bbg-white(?!\/)|\btext-black\b|\btext-black\//.test(
        readFileSync(file, 'utf8')
      )
    );
    expect(offenders).toEqual([]);
  });

  it('defines a dark value for every light token', () => {
    const css = readFileSync('src/index.css', 'utf8');

    const block = (start: string) => {
      const from = css.indexOf(start);
      expect(from, `${start} not found in index.css`).toBeGreaterThan(-1);
      return css.slice(from, css.indexOf('\n}', from));
    };

    const names = (text: string): string[] =>
      (text.match(/--color-[a-z-]+(?=:)/g) ?? []).sort();

    const light = names(block('@theme {'));
    const dark = names(block(":root[data-theme='dark'] {"));

    expect(light.length).toBeGreaterThan(5);
    const missing: string[] = light.filter((n) => !dark.includes(n));
    expect(missing).toEqual([]);
  });
});
