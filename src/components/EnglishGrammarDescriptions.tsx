import { tenseSections } from '../data/grammar';
import { TenseSection } from '../types/types';

const headers: string[] = [
  'Type',
  'Example in English',
  'Example in Norwegian',
  'Example in Farsi',
];

const TenseBlock = ({
  section,
  isFirst,
}: {
  section: TenseSection;
  isFirst: boolean;
}) => (
  <div
    className={`rounded p-1 md:p-4 ${isFirst ? '' : 'mt-8'}`}
    style={{ backgroundColor: section.sectionColor }}
  >
    <h2 className="pb-8 text-center text-3xl" style={{ color: '#263238' }}>
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
            <p key={line} className="text-base">
              {line}
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
        <p className="text-base">{section.signs.text}</p>
      </div>
    </div>

    {/* Table Section */}
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead style={{ backgroundColor: section.tableHeadColor }}>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-4 font-medium text-white"
                  scope="col"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row[0].text} className="border-b border-black/10">
                {row.map((cell) => (
                  <td
                    key={cell.text}
                    dir={cell.rtl ? 'rtl' : undefined}
                    className="px-4 py-4"
                  >
                    {cell.text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const EnglishGrammarDescriptions = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Title Section */}
      <div className="py-8 text-center">
        <h1 className="mb-2 text-4xl">English and Norwegian Tenses</h1>
        <p className="text-base text-black/60">
          A guide to understanding tenses in English and Norwegian with
          examples.
        </p>
      </div>

      {tenseSections.map((section, index) => (
        <TenseBlock
          key={section.title}
          section={section}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default EnglishGrammarDescriptions;
