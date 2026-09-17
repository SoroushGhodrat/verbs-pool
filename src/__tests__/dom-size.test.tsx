import { describe, it, expect, beforeEach } from 'vitest';
import { renderWithProviders, setViewport } from '../test-utils';
import EnglishVerbsDataTable from '../components/EnglishVerbsDataTable';

beforeEach(() => setViewport(true));

describe('rendered DOM size', () => {
  it('mounts one letter group, not the whole dataset', () => {
    const { container } = renderWithProviders(<EnglishVerbsDataTable />);
    const rows = container.querySelectorAll('tbody tr').length;
    const cells = container.querySelectorAll('td').length;

    // The full English list is 988 verbs. Only group A should be mounted.
    expect(rows).toBeGreaterThan(0);
    expect(rows).toBeLessThan(200);
    console.log(`  rendered rows: ${rows}, cells: ${cells}`);
  });
});

describe('sticky table header', () => {
  it('is offset by the filter bar and not trapped in an overflow container', () => {
    const { container } = renderWithProviders(<EnglishVerbsDataTable />);
    const th = container.querySelector('thead th')!;

    expect(th.className).toContain('sticky');
    // A hardcoded offset cannot track the filter bar, which wraps by width.
    expect(th.className).not.toMatch(/top-\[/);
    expect((th as HTMLElement).style.top).not.toBe('');

    // `overflow: hidden` on any ancestor makes that element the sticky
    // containing block, which silently breaks the sticky header.
    for (let el = th.parentElement; el; el = el.parentElement) {
      expect(el.className).not.toContain('overflow-hidden');
    }
  });
});
