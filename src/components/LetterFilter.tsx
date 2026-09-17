import { useTranslation } from 'react-i18next';

interface LetterFilterProps {
  letters: string[];
  /** Currently shown letter, or null while a search is active. */
  active: string | null;
  onSelect: (letter: string) => void;
}

/**
 * Selects which letter group is rendered. This used to be a list of #anchor
 * links into a page holding every group at once; making it a filter means only
 * one group is in the DOM, which is both faster and easier to navigate.
 */
const LetterFilter = ({ letters, active, onSelect }: LetterFilterProps) => {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('alphabets.hint')}>
      <ul className="flex gap-1 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
        {letters.map((letter) => {
          const isActive = letter === active;
          return (
            <li key={letter}>
              <button
                type="button"
                onClick={() => onSelect(letter)}
                aria-current={isActive ? 'true' : undefined}
                className={`min-w-9 rounded px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-ink hover:bg-primary/10'
                }`}
              >
                {letter}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LetterFilter;
