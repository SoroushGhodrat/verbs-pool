import VerbsTable, { VerbColumn, VerbGroup } from './VerbsTable';
import * as no from '../data/no';
import { VerbEN, VerbNO } from '../types/types';

const columns: VerbColumn<VerbNO>[] = [
  { id: 'infinitiv', key: 'infinitivForm', header: 'Infinitiv' },
  { id: 'presens', key: 'presensForm', header: 'Presens' },
  { id: 'preteritum', key: 'preteritumForm', header: 'Preteritum' },
  { id: 'perfektum', key: 'perfektumForm', header: 'Presens Perfektum' },
  { id: 'engelsk', key: 'betydning', header: 'Engelsk' },
];

const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'Ø',
] as const;

const groups: VerbGroup<VerbNO>[] = LETTERS.map((label) => ({
  label,
  data: no[label as keyof typeof no] as VerbNO[],
}));

const isVerbNO = (verb: VerbNO | VerbEN): verb is VerbNO =>
  (verb as VerbNO).infinitivForm !== undefined;

const NorwegianVerbsDataTable = () => (
  <VerbsTable
    groups={groups}
    columns={columns}
    isOwnVerb={isVerbNO}
    identity={(verb) => verb.infinitivForm}
  />
);

export default NorwegianVerbsDataTable;
