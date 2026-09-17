import { useTranslation } from 'react-i18next';
import { tenseSections } from '../data/grammar';
import { TenseLine, TenseSection } from '../types/types';

const TenseBlock = ({
  section,
  isFirst,
  isNorwegian,
}: {
  section: TenseSection;
  isFirst: boolean;
  isNorwegian: boolean;
}) => {
  const { t } = useTranslation();

  const headers = [
    t('grammar.headers.type'),
    t('grammar.headers.english'),
    t('grammar.headers.norwegian'),
    t('grammar.headers.farsi'),
  ];

  const lineText = (line: TenseLine) => {
    if (line.kind === 'note') {
      return isNorwegian ? (line.valueNo ?? line.value) : line.value;
    }
    const label =
      line.kind === 'formula'
        ? t('grammar.formula')
        : t('grammar.passiveFormula');
    return `${label}: ${line.value}`;
  };

  return (
    <div
      className={`rounded p-1 md:p-4 ${isFirst ? '' : 'mt-8'}`}
      style={{ backgroundColor: section.sectionColor }}
    >
      <h2 className="pb-8 text-center text-3xl text-[#263238]">
        {section.title}
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {section.languages.map((card) => (
          <div
            key={card.label}
            className="rounded-lg p-4 text-white shadow-md"
            style={{ backgroundColor: card.color }}
          >
            <h3 className="mb-2 text-xl">{card.label}</h3>
            {card.lines.map((line) => (
              <p key={line.kind + line.value} className="text-base">
                {lineText(line)}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Signs Section */}
      <div className="py-4">
        <div
          className="rounded-lg p-4 text-white shadow-md"
          style={{ backgroundColor: section.signs.color }}
        >
          <p className="text-base">
            {t('grammar.signs')}:{' '}
            {isNorwegian ? section.signs.no : section.signs.en}
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-lg bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{section.title}</caption>
            <thead style={{ backgroundColor: section.tableHeadColor }}>
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-4 py-4 font-medium text-white first:rounded-tl-lg last:rounded-tr-lg"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.kind} className="border-b border-black/10">
                  <th scope="row" className="px-4 py-4 text-left font-normal">
                    {t(`grammar.rowKinds.${row.kind}`)}
                  </th>
                  <td className="px-4 py-4">{row.en}</td>
                  <td className="px-4 py-4">{row.no}</td>
                  <td dir="rtl" className="px-4 py-4">
                    {row.fa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const EnglishGrammarDescriptions = () => {
  const { t, i18n } = useTranslation();
  const isNorwegian = i18n.language?.startsWith('no') ?? false;

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Title Section */}
      <div className="py-8 text-center">
        <h1 className="mb-2 text-4xl">{t('grammar.title')}</h1>
        <p className="text-base text-black/60">{t('grammar.subtitle')}</p>
      </div>

      {tenseSections.map((section, index) => (
        <TenseBlock
          key={section.title}
          section={section}
          isFirst={index === 0}
          isNorwegian={isNorwegian}
        />
      ))}
    </div>
  );
};

export default EnglishGrammarDescriptions;
