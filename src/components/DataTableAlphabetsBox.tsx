import { generateAlphabet } from '../util/helper';
import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const DataTableAlphabetsBox = () => {
  const { t } = useTranslation();

  const englishLetters = useMemo(() => generateAlphabet('english'), []);
  const norwegianLetters = useMemo(() => generateAlphabet('norwegian'), []);

  const { language } = useLanguage();
  const [currentLanguageLetters, setCurrentLanguageLetters] = useState<
    string[]
  >([]);

  useEffect(() => {
    // Set default language to Norwegian if no language is set or if it's set to Norwegian
    if (language === 'Norsk' || !language) {
      setCurrentLanguageLetters(norwegianLetters);
    } else if (language === 'English') {
      setCurrentLanguageLetters(englishLetters);
    }
  }, [language, englishLetters, norwegianLetters]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10 text-center text-4xl capitalize">
        {t('common english verbs')}
      </h1>

      <div className="rounded-[10px] bg-alphabet-box p-4">
        <h6 className="pb-4 text-center text-xl">
          {t('press a letter to jump to the group')}
        </h6>
        <div className="flex flex-wrap gap-4">
          {currentLanguageLetters.map((letter) => (
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
