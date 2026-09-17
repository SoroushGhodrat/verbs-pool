import { useState } from 'react';
import { goToTop } from '../util/helper';
import { ArrowUpwardIcon } from './UI/icons';

import {
  A as EnglishA,
  B as EnglishB,
  C as EnglishC,
  D as EnglishD,
  E as EnglishE,
  F as EnglishF,
  G as EnglishG,
  H as EnglishH,
  I as EnglishI,
  J as EnglishJ,
  K as EnglishK,
  L as EnglishL,
  M as EnglishM,
  N as EnglishN,
  O as EnglishO,
  P as EnglishP,
  Q as EnglishQ,
  R as EnglishR,
  S as EnglishS,
  T as EnglishT,
  U as EnglishU,
  V as EnglishV,
  W as EnglishW,
  // X as EnglishX,
  Y as EnglishY,
  Z as EnglishZ,
} from '../data/en';
import DataTableAlphabetsBox from './DataTableAlphabetsBox';
import Tooltip from './UI/Tooltip';
import DataTableSearchBox from './DataTableSearchBox';

import { useTranslation } from 'react-i18next';
import { VerbEN, VerbNO } from '../types/types';

type UnionVerbs = VerbNO | VerbEN;

const EnglishVerbsDataTable = () => {
  const { t } = useTranslation();

  const [filteredVerbs, setFilteredVerbs] = useState<VerbEN[]>([]);
  const [inputValue, setInputValue] = useState('');

  const tableHeader: string[] = [
    'Base',
    'Past',
    'Past Participle',
    'Present Perfect',
    'Present Simple 3rd Person Singular',
    'Present Participle',
  ];

  const tableCells = [
    { key: 'baseForm', label: 'Base' },
    { key: 'pastForm', label: 'Past' },
    { key: 'pastParticipleForm', label: 'Past Participle' },
    { key: 'presentPerfectForm', label: 'Present Perfect' },
    {
      key: 'presentSimple3rdPersonSingular',
      label: 'Present Simple 3rd Person Singular',
    },
    { key: 'presentParticiple', label: 'Present Participle' },
  ];

  const englishGroups = [
    { data: EnglishA, label: 'A' },
    { data: EnglishB, label: 'B' },
    { data: EnglishC, label: 'C' },
    { data: EnglishD, label: 'D' },
    { data: EnglishE, label: 'E' },
    { data: EnglishF, label: 'F' },
    { data: EnglishG, label: 'G' },
    { data: EnglishH, label: 'H' },
    { data: EnglishI, label: 'I' },
    { data: EnglishJ, label: 'J' },
    { data: EnglishK, label: 'K' },
    { data: EnglishL, label: 'L' },
    { data: EnglishM, label: 'M' },
    { data: EnglishN, label: 'N' },
    { data: EnglishO, label: 'O' },
    { data: EnglishP, label: 'P' },
    { data: EnglishQ, label: 'Q' },
    { data: EnglishR, label: 'R' },
    { data: EnglishS, label: 'S' },
    { data: EnglishT, label: 'T' },
    { data: EnglishU, label: 'U' },
    { data: EnglishV, label: 'V' },
    { data: EnglishW, label: 'W' },
    // { data: EnglishX, label: "X" },
    { data: EnglishY, label: 'Y' },
    { data: EnglishZ, label: 'Z' },
  ];

  const handleSearch = (filtered: UnionVerbs[], value: string) => {
    const filteredNO = filtered.filter((verb): verb is VerbEN => {
      return (verb as VerbEN).baseForm !== undefined;
    });
    setFilteredVerbs(filteredNO);
    setInputValue(value);
  };

  const renderTable = (verbs: VerbEN[], letter: string) => {
    return (
      <>
        {/* Letters group header */}
        <div className="flex items-center justify-center gap-4">
          <h5
            id={letter}
            className="mb-10 mt-10 text-center text-2xl capitalize"
          >
            {`${t('group')} ${letter}`}
          </h5>

          {/* Go-to-top arrow icon */}
          <Tooltip title={t('scroll to top')} placement="right">
            <button
              type="button"
              onClick={goToTop}
              aria-label={t('scroll to top')}
              className="rounded-full p-2 transition-colors hover:bg-black/5"
            >
              <ArrowUpwardIcon className="h-6 w-6 transition-transform duration-500 hover:scale-110 hover:text-accent" />
            </button>
          </Tooltip>
        </div>

        <div className="overflow-hidden rounded bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead className="bg-table-head capitalize">
                {/* Table headers present, past, ... */}
                <tr>
                  {tableHeader?.map((header: string) => (
                    <th
                      key={header}
                      className="border-b border-black/10 px-4 py-4 text-xl font-medium"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {verbs.map((row: VerbEN, index: number) =>
                  !row.baseForm ? (
                    <tr key={`empty-${index}`} className="odd:bg-black/[0.04]">
                      <td colSpan={tableHeader.length} className="px-4 py-4">
                        <p className="text-center text-sm">
                          {t('this group has no verb!')}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    <tr
                      key={`${row.baseForm}-${index}`}
                      className="odd:bg-black/[0.04]"
                    >
                      {tableCells.map(({ key }) => (
                        <td
                          key={key}
                          className="border-b border-black/10 px-4 py-4 text-base capitalize last:border-0"
                        >
                          {key === 'pastParticipleForm'
                            ? `Had ${row[key as keyof VerbEN]}`
                            : key === 'presentPerfectForm'
                              ? `Have/Has ${row[key as keyof VerbEN]}`
                              : row[key as keyof VerbEN]}
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="mb-10 flex justify-center">
        <div className="w-11/12 sm:w-7/12">
          <DataTableAlphabetsBox />
          <DataTableSearchBox onSearch={handleSearch} />
          {inputValue.length === 0
            ? englishGroups.map((group) =>
                renderTable(group.data, `${group.label}`)
              )
            : filteredVerbs.length > 0 &&
              renderTable(
                filteredVerbs,
                `Jeg har funnet ${filteredVerbs.length} ${
                  filteredVerbs.length === 1 ? 'resultat' : 'resultater'
                } 🥳`
              )}
          {inputValue.length !== 0 && filteredVerbs.length === 0 && (
            <h5 className="mb-10 mt-10 text-center text-2xl">
              Jeg fant ikke noe for
              <span className="text-error"> " {inputValue} " </span>
              🥸
            </h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnglishVerbsDataTable;
