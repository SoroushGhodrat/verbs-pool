import VerbsTable, { VerbColumn, VerbGroup } from './VerbsTable';
import * as en from '../data/en';
import { VerbEN, VerbNO } from '../types/types';

// Present perfect and past perfect both build on the past participle, so each
// column carries its own id and a prefix rather than a duplicated data field.
const columns: VerbColumn<VerbEN>[] = [
  { id: 'base', key: 'baseForm', header: 'Base' },
  { id: 'past', key: 'pastForm', header: 'Past' },
  {
    id: 'pastParticiple',
    key: 'pastParticipleForm',
    header: 'Past Participle',
    prefix: 'Had',
  },
  {
    id: 'presentPerfect',
    key: 'pastParticipleForm',
    header: 'Present Perfect',
    prefix: 'Have/Has',
  },
  {
    id: 'thirdPerson',
    key: 'presentSimple3rdPersonSingular',
    header: 'Present Simple 3rd Person Singular',
  },
  {
    id: 'presentParticiple',
    key: 'presentParticiple',
    header: 'Present Participle',
  },
];

// No X group: the data set has no English verbs starting with X.
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
  'Y',
  'Z',
] as const;

const groups: VerbGroup<VerbEN>[] = LETTERS.map((label) => ({
  label,
  data: en[label as keyof typeof en] as VerbEN[],
}));

const isVerbEN = (verb: VerbNO | VerbEN): verb is VerbEN =>
  (verb as VerbEN).baseForm !== undefined;

const EnglishVerbsDataTable = () => (
  <VerbsTable
    groups={groups}
    columns={columns}
    isOwnVerb={isVerbEN}
    identity={(verb) => verb.baseForm}
  />
);

export default EnglishVerbsDataTable;
