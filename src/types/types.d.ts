export interface VerbEN {
  baseForm: string;
  pastForm: string;
  pastParticipleForm: string;
  presentSimple3rdPersonSingular: string;
  presentParticiple: string;
}

export interface VerbNO {
  infinitivForm: string;
  presensForm: string;
  preteritumForm: string;
  perfektumForm: string;
  betydning: string;
}

export type TenseLineKind = 'formula' | 'passive' | 'note';

export interface TenseLine {
  kind: TenseLineKind;
  value: string;
  /** Only notes are prose; formulas are notation and stay as they are. */
  valueNo?: string;
}

export interface TenseLanguageCard {
  label: string;
  color: string;
  lines: TenseLine[];
}

export type TenseRowKind = 'normal' | 'negative' | 'question' | 'passive';

export interface TenseRow {
  kind: TenseRowKind;
  en: string;
  no: string;
  fa: string;
}

export interface TenseSection {
  title: string;
  sectionColor: string;
  languages: TenseLanguageCard[];
  signs: { color: string; en: string; no: string };
  tableHeadColor: string;
  rows: TenseRow[];
}

export type CefrLevel = 'A1' | 'A2' | 'B1';

export interface SentencePair {
  no: string;
  en: string;
  /** Optional usage note, e.g. register or a literal gloss. */
  note?: string;
}

export interface SentenceCategory {
  /** Matches a key under `sentences.categories` in the locale files. */
  id: string;
  level: CefrLevel;
  sentences: SentencePair[];
}
