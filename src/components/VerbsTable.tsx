import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LetterFilter from './LetterFilter';
import DataTableSearchBox from './DataTableSearchBox';
import { useIsDesktop } from '../hooks/useMediaQuery';
import { useElementHeight } from '../hooks/useElementHeight';
import { VerbEN, VerbNO } from '../types/types';

type UnionVerbs = VerbNO | VerbEN;

export interface VerbColumn<T> {
  /** Stable id - two columns may read the same field with different prefixes. */
  id: string;
  key: keyof T;
  header: string;
  /** Rendered before the value, e.g. "Had" or "Have/Has". */
  prefix?: string;
}

export interface VerbGroup<T> {
  label: string;
  data: T[];
}

interface VerbsTableProps<T extends UnionVerbs> {
  groups: VerbGroup<T>[];
  columns: VerbColumn<T>[];
  /** Narrows the search box's union result to this table's verb type. */
  isOwnVerb: (verb: UnionVerbs) => verb is T;
  /** The field that identifies a row, used for React keys. */
  identity: (verb: T) => string;
}

const VerbsTable = <T extends UnionVerbs>({
  groups,
  columns,
  isOwnVerb,
  identity,
}: VerbsTableProps<T>) => {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const filterBarRef = useRef<HTMLDivElement>(null);
  const filterBarHeight = useElementHeight(filterBarRef);
  const [activeLetter, setActiveLetter] = useState(groups[0]?.label ?? '');
  const [filteredVerbs, setFilteredVerbs] = useState<T[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const isSearching = searchValue.length > 0;

  const handleSearch = (filtered: UnionVerbs[], value: string) => {
    setFilteredVerbs(filtered.filter(isOwnVerb));
    setSearchValue(value);
  };

  const activeGroup = useMemo(
    () => groups.find((group) => group.label === activeLetter),
    [groups, activeLetter]
  );

  // Only one group is rendered at a time, so the DOM holds tens of rows
  // rather than the ~988 the English list would otherwise mount at once.
  const visibleVerbs = isSearching ? filteredVerbs : (activeGroup?.data ?? []);

  const heading = isSearching
    ? t('search.resultsFound', { count: filteredVerbs.length })
    : `${t('table.group')} ${activeLetter}`;

  const [titleColumn, ...detailColumns] = columns;
  const value = (row: T, column: VerbColumn<T>) =>
    column.prefix
      ? `${column.prefix} ${row[column.key]}`
      : String(row[column.key]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      <h1 className="py-6 text-center text-3xl font-semibold">
        {t('alphabets.title')}
      </h1>

      {/* Search and letters stay reachable while scrolling a long group. */}
      <div
        ref={filterBarRef}
        className="sticky top-0 z-30 -mx-4 border-b border-line bg-surface px-4 pb-3 pt-2"
      >
        <DataTableSearchBox onSearch={handleSearch} />
        <LetterFilter
          letters={groups.map((group) => group.label)}
          active={isSearching ? null : activeLetter}
          onSelect={setActiveLetter}
        />
      </div>

      <p aria-live="polite" className="py-6 text-center text-xl font-medium">
        {isSearching && filteredVerbs.length === 0 ? (
          <>
            {t('search.noResultsFor')}
            <span className="text-error"> &quot;{searchValue}&quot; </span>🥸
          </>
        ) : (
          heading
        )}
      </p>

      {visibleVerbs.length === 0 && !isSearching && (
        <p className="rounded bg-card p-6 text-center text-sm shadow-sm">
          {t('table.emptyGroup')}
        </p>
      )}

      {visibleVerbs.length > 0 && (
        <>
          {/* Mobile: one card per verb. A six-column table is unreadable
              at phone widths, so forms become a label/value list. */}
          {!isDesktop && (
            <ul className="flex flex-col gap-3">
              {visibleVerbs.map((row, index) => (
                <li
                  key={`${identity(row)}-${index}`}
                  className="rounded-lg bg-card p-4 shadow-sm"
                >
                  <h2 className="mb-3 text-lg font-semibold capitalize">
                    {value(row, titleColumn)}
                  </h2>
                  <dl className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-x-4 gap-y-2 text-sm">
                    {detailColumns.map((column) => (
                      <div key={column.id} className="contents">
                        <dt className="text-muted">{column.header}</dt>
                        <dd className="capitalize">{value(row, column)}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          )}

          {/* Desktop: the table earns its place for comparing across rows. */}
          {isDesktop && (
            <div className="rounded-lg bg-card shadow-sm">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">{heading}</caption>
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column.id}
                        scope="col"
                        style={{ top: filterBarHeight }}
                        className="sticky z-20 border-b border-line bg-surface px-4 py-3 text-sm font-semibold first:rounded-tl-lg last:rounded-tr-lg"
                      >
                        {column.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleVerbs.map((row, index) => (
                    <tr
                      key={`${identity(row)}-${index}`}
                      className="border-b border-line transition-colors last:border-0 hover:bg-primary/5"
                    >
                      {columns.map((column) => (
                        <td
                          key={column.id}
                          className="px-4 py-3 text-base capitalize"
                        >
                          {value(row, column)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VerbsTable;
