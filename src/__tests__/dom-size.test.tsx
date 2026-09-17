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
