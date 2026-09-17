import { useState } from 'react';
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

const SearchField: React.FC<DataTableSearchBoxProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    const filtered =
      language === 'Norsk'
        ? no_verbs.filter((verb) => {
            return Object.values(verb).some((val) =>
              val.toLowerCase().includes(value.toLowerCase())
            );
          })
        : en_verbs.filter((verb) => {
            return Object.values(verb).some((val) =>
              val.toLowerCase().includes(value.toLowerCase())
            );
          });

    onSearch(filtered, value);
  };

  const handleClearInput = () => {
    setSearchValue('');

    onSearch([], ''); // reset to all verbs when input is cleared
  };

  const label = `${t('what are you looking for?')} 🤔`;

  return (
    <div className="relative">
      <label
        htmlFor="verb-search"
        className="absolute -top-2 left-3 z-10 bg-surface px-1 text-xs text-black/60"
      >
        {label}
      </label>
      <input
        id="verb-search"
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        className="w-full rounded border border-black/25 bg-transparent py-4 pl-3 pr-12 text-base outline-none transition-colors hover:border-black/60 focus:border-primary focus:ring-1 focus:ring-primary"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Tooltip title={t('clear search box')} placement="left">
          <button
            type="button"
            onClick={handleClearInput}
            aria-label={t('clear search box')}
            className="rounded-full p-2 transition-colors hover:bg-black/5"
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
    <div className="my-10 pt-1">
      <SearchField {...props} />
    </div>
  );
};

export default DataTableSearchBox;
