import { useState } from 'react';
import { goToTop } from '../util/helper';
import { ArrowUpwardIcon } from './UI/icons';

import {
  A as NorskA,
  B as NorskB,
  C as NorskC,
  D as NorskD,
  E as NorskE,
  F as NorskF,
  G as NorskG,
  H as NorskH,
  I as NorskI,
  J as NorskJ,
  K as NorskK,
  L as NorskL,
  M as NorskM,
  N as NorskN,
  O as NorskO,
  P as NorskP,
  Q as NorskQ,
  R as NorskR,
  S as NorskS,
  T as NorskT,
  U as NorskU,
  V as NorskV,
  W as NorskW,
  X as NorskX,
  Y as NorskY,
  Z as NorskZ,
  Ø as NorskØ,
} from '../data/no';

import DataTableAlphabetsBox from './DataTableAlphabetsBox';
import Tooltip from './UI/Tooltip';
import DataTableSearchBox from './DataTableSearchBox';

import { useTranslation } from 'react-i18next';
import { VerbEN, VerbNO } from '../types/types';

type UnionVerbs = VerbNO | VerbEN;

const NorwegianVerbsDataTable = () => {
  const { t } = useTranslation();

  const [filteredVerbs, setFilteredVerbs] = useState<VerbNO[]>([]);
  const [inputValue, setInputValue] = useState('');

  const tableHeaders: string[] = [
    'Infinitiv',
    'Presens',
    'Preteritum',
    'Presens Perfektum',
    'Engelsk',
  ];

  const tableCells = [
    { key: 'infinitivForm', label: 'Infinitive' },
    { key: 'presensForm', label: 'Present' },
    { key: 'preteritumForm', label: 'Past' },
    { key: 'perfektumForm', label: 'Perfect' },
    { key: 'betydning', label: 'Meaning' },
  ];

  const norwegianGroups = [
    { data: NorskA, label: 'A' },
    { data: NorskB, label: 'B' },
    { data: NorskC, label: 'C' },
    { data: NorskD, label: 'D' },
    { data: NorskE, label: 'E' },
    { data: NorskF, label: 'F' },
    { data: NorskG, label: 'G' },
    { data: NorskH, label: 'H' },
    { data: NorskI, label: 'I' },
    { data: NorskJ, label: 'J' },
    { data: NorskK, label: 'K' },
    { data: NorskL, label: 'L' },
    { data: NorskM, label: 'M' },
    { data: NorskN, label: 'N' },
    { data: NorskO, label: 'O' },
    { data: NorskP, label: 'P' },
    { data: NorskQ, label: 'Q' },
    { data: NorskR, label: 'R' },
    { data: NorskS, label: 'S' },
    { data: NorskT, label: 'T' },
    { data: NorskU, label: 'U' },
    { data: NorskV, label: 'V' },
    { data: NorskW, label: 'W' },
    { data: NorskX, label: 'X' },
    { data: NorskY, label: 'Y' },
    { data: NorskZ, label: 'Z' },
    { data: NorskØ, label: 'Ø' },
  ];

  const handleSearch = (filtered: UnionVerbs[], value: string) => {
    const filteredNO = filtered.filter((verb): verb is VerbNO => {
      return (verb as VerbNO).infinitivForm !== undefined;
    });
    setFilteredVerbs(filteredNO);
    setInputValue(value);
  };

  const renderTable = (verbs: VerbNO[], letter: string) => {
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
                  {tableHeaders?.map((header: string) => (
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
                {verbs.map((row: VerbNO, index: number) =>
                  !row.infinitivForm ? (
                    <tr key={`empty-${index}`} className="odd:bg-black/[0.04]">
                      <td colSpan={tableHeaders.length} className="px-4 py-4">
                        <p className="text-center text-sm">
                          {t('this group has no verb!')}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    <tr
                      key={`${row.infinitivForm}-${index}`}
                      className="odd:bg-black/[0.04]"
                    >
                      {tableCells.map(({ key }) => (
                        <td
                          key={key}
                          className="border-b border-black/10 px-4 py-4 text-base capitalize last:border-0"
                        >
                          {row[key as keyof VerbNO]}
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
            ? norwegianGroups.map((group) =>
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

export default NorwegianVerbsDataTable;
