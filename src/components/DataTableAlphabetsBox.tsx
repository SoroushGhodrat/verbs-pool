import { useTranslation } from 'react-i18next';

interface DataTableAlphabetsBoxProps {
  /** Letters that actually have a group rendered below, in display order. */
  letters: string[];
}

const DataTableAlphabetsBox = ({ letters }: DataTableAlphabetsBoxProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10 text-center text-4xl">{t('alphabets.title')}</h1>

      <div className="rounded-[10px] bg-alphabet-box p-4">
        <h2 className="pb-4 text-center text-xl">{t('alphabets.hint')}</h2>
        <div className="flex flex-wrap gap-4">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="rounded px-4 py-2 transition-colors hover:bg-black/5"
            >
              {letter}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTableAlphabetsBox;
