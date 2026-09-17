import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { goToTop } from '../util/helper';
import { ArrowUpwardIcon } from './UI/icons';
import Tooltip from './UI/Tooltip';
import DataTableAlphabetsBox from './DataTableAlphabetsBox';
import DataTableSearchBox from './DataTableSearchBox';
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
  /** The field that identifies a row; blank means "group has no verbs". */
  identity: (verb: T) => string;
}

const VerbsTable = <T extends UnionVerbs>({
  groups,
  columns,
  isOwnVerb,
  identity,
}: VerbsTableProps<T>) => {
  const { t } = useTranslation();
  const [filteredVerbs, setFilteredVerbs] = useState<T[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (filtered: UnionVerbs[], value: string) => {
    setFilteredVerbs(filtered.filter(isOwnVerb));
    setInputValue(value);
  };

  /** `anchor` is the bare letter, so the alphabet links (#A) keep working. */
  const renderTable = (verbs: T[], heading: string, anchor?: string) => (
    <div key={heading}>
      {/* Letters group header */}
      <div className="flex items-center justify-center gap-4">
        <h2 id={anchor} className="mb-10 mt-10 text-center text-2xl">
          {heading}
        </h2>

        {/* Go-to-top arrow icon */}
        <Tooltip title={t('table.scrollTop')} placement="right">
          <button
            type="button"
            onClick={goToTop}
            aria-label={t('table.scrollTop')}
            className="rounded-full p-2 transition-colors hover:bg-black/5"
          >
            <ArrowUpwardIcon className="h-6 w-6 transition-transform duration-500 hover:scale-110 hover:text-accent" />
          </button>
        </Tooltip>
      </div>

      <div className="overflow-hidden rounded bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{heading}</caption>
            <thead className="bg-table-head">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    className="border-b border-black/10 px-4 py-4 text-xl font-medium"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {verbs.map((row, index) =>
                !identity(row) ? (
                  <tr key={`empty-${index}`} className="odd:bg-black/[0.04]">
                    <td colSpan={columns.length} className="px-4 py-4">
                      <p className="text-center text-sm">
                        {t('table.emptyGroup')}
                      </p>
                    </td>
                  </tr>
                ) : (
                  <tr
                    key={`${identity(row)}-${index}`}
                    className="odd:bg-black/[0.04]"
                  >
                    {columns.map(({ id, key, prefix }) => (
                      <td
                        key={id}
                        className="border-b border-black/10 px-4 py-4 text-base capitalize last:border-0"
                      >
                        {prefix ? `${prefix} ${row[key]}` : String(row[key])}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const isSearching = inputValue.length !== 0;

  return (
    <div className="flex flex-col justify-center">
      <div className="mb-10 flex justify-center">
        <div className="w-11/12 sm:w-7/12">
          <DataTableAlphabetsBox letters={groups.map((group) => group.label)} />
          <DataTableSearchBox onSearch={handleSearch} />

          {!isSearching &&
            groups.map((group) =>
              renderTable(
                group.data,
                `${t('table.group')} ${group.label}`,
                group.label
              )
            )}

          {isSearching &&
            filteredVerbs.length > 0 &&
            renderTable(
              filteredVerbs,
              t('search.resultsFound', { count: filteredVerbs.length })
            )}

          {isSearching && filteredVerbs.length === 0 && (
            <p className="mb-10 mt-10 text-center text-2xl">
              {t('search.noResultsFor')}
              <span className="text-error"> &quot;{inputValue}&quot; </span>
              🥸
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerbsTable;
