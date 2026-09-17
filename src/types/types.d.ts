export interface VerbEN {
  baseForm: string;
  pastForm: string;
  pastParticipleForm: string;
  presentPerfectForm: string;
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

export interface GrammarCell {
  text: string;
  rtl: boolean;
}

export interface TenseLanguageCard {
  label: string;
  color: string;
  lines: string[];
}

export interface TenseSection {
  title: string;
  sectionColor: string;
  languages: TenseLanguageCard[];
  signs: { color: string; text: string };
  tableHeadColor: string;
  rows: GrammarCell[][];
}
