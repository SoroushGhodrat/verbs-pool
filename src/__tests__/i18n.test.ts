import { describe, it, expect } from 'vitest';
import en from '../../public/locales/en/global.json';
import no from '../../public/locales/no/global.json';

type Nested = { [key: string]: string | Nested };

const flatten = (obj: Nested, prefix = ''): string[] =>
  Object.entries(obj).flatMap(([key, value]) =>
    typeof value === 'string'
      ? [`${prefix}${key}`]
      : flatten(value, `${prefix}${key}.`)
  );

describe('locale files', () => {
  it('define exactly the same keys in both languages', () => {
    const enKeys = flatten(en as Nested).sort();
    const noKeys = flatten(no as Nested).sort();

    expect(noKeys.filter((k) => !enKeys.includes(k))).toEqual([]);
    expect(enKeys.filter((k) => !noKeys.includes(k))).toEqual([]);
  });

  it('has no empty or untranslated-looking values', () => {
    const values = (obj: Nested): string[] =>
      Object.values(obj).flatMap((v) =>
        typeof v === 'string' ? [v] : values(v)
      );

    for (const value of [...values(en as Nested), ...values(no as Nested)]) {
      expect(value.trim()).not.toBe('');
    }
  });

  it('keeps Norwegian genuinely distinct from English', () => {
    // A handful of strings are legitimately identical across both languages
    // (e.g. "Type"), but the bulk must actually differ.
    const enKeys = flatten(en as Nested);
    const get = (obj: Nested, path: string) =>
      path
        .split('.')
        .reduce<string | Nested>((acc, k) => (acc as Nested)[k], obj);

    const identical = enKeys.filter(
      (k) => get(en as Nested, k) === get(no as Nested, k)
    );
    expect(identical.length).toBeLessThan(enKeys.length * 0.2);
  });
});
