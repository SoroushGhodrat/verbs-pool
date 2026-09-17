import { useEffect, useMemo, useRef, useState } from 'react';
import { no_verbs } from '../data/no';
import { en_verbs } from '../data/en';
import Tooltip from './UI/Tooltip';
import { CloseIcon } from './UI/icons';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { VerbEN, VerbNO } from '../types/types';

type UnionVerbs = VerbNO | VerbEN;
interface DataTableSearchBoxProps {
  onSearch: (filteredVerbs: UnionVerbs[], value: string) => void;
}

const DEBOUNCE_MS = 200;

/**
 * Lowercased haystack per verb, built once per language instead of on every
 * keystroke - the English list alone is ~988 verbs with five fields each.
 */
const buildIndex = (verbs: UnionVerbs[]) =>
  verbs.map((verb) => ({
    verb,
    haystack: Object.values(verb).join('\u0000').toLowerCase(),
  }));

const SearchField: React.FC<DataTableSearchBoxProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [searchValue, setSearchValue] = useState('');

  const index = useMemo(
    () => buildIndex(language === 'Norsk' ? no_verbs : en_verbs),
    [language]
  );

  // Keep the latest callback without making the debounce effect re-run.
  const onSearchRef = useRef(onSearch);
  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  useEffect(() => {
    if (searchValue === '') {
      onSearchRef.current([], '');
      return;
    }

    const timer = setTimeout(() => {
      const needle = searchValue.toLowerCase();
      const filtered = index
        .filter(({ haystack }) => haystack.includes(needle))
        .map(({ verb }) => verb);
      onSearchRef.current(filtered, searchValue);
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [searchValue, index]);

  const label = `${t('search.label')} 🤔`;

  return (
    <div className="relative">
      <label htmlFor="verb-search" className="sr-only">
        {label}
      </label>
      <input
        id="verb-search"
        type="search"
        value={searchValue}
        placeholder={label}
        onChange={(event) => setSearchValue(event.target.value)}
        className="w-full rounded-lg border border-line bg-card py-2.5 pl-3 pr-12 text-base outline-none transition-colors hover:border-ink/40 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Tooltip title={t('search.clear')} placement="left">
          <button
            type="button"
            onClick={() => setSearchValue('')}
            aria-label={t('search.clear')}
            className="rounded-full p-2 transition-colors hover:bg-hover"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

const DataTableSearchBox: React.FC<DataTableSearchBoxProps> = (props) => {
  return (
    <div className="mb-3">
      <SearchField {...props} />
    </div>
  );
};

export default DataTableSearchBox;
