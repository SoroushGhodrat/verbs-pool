import { TenseSection } from '../types/types';

/**
 * Tense reference content for the English Grammar page. Extracted verbatim
 * from the JSX that previously hardcoded it - this is data, not markup.
 */
export const tenseSections: TenseSection[] = [
  {
    title: 'Simple Present',
    sectionColor: '#eceff1',
    languages: [
      {
        label: 'English',
        color: '#78909c',
        lines: [
          'Formula: Subject + base verb',
          'Passive formula: Subject + am/is/are + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#607d8b',
        lines: [
          'Formula: Subjekt + verb (presens)',
          'Passive formula: Subjekt + er + partisipp av verb',
        ],
      },
    ],
    signs: {
      color: '#546e7a',
      text: 'Signs: Habitual actions, routines, facts, general truths.',
    },
    tableHeadColor: '#263238',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She writes letters.', rtl: false },
        { text: 'Hun skriver brev.', rtl: false },
        { text: 'او نامه می‌نویسد.', rtl: true },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She does not write letters.', rtl: false },
        { text: 'Hun skriver ikke brev.', rtl: false },
        { text: 'او نامه نمی‌نویسد.', rtl: true },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Does she write letters?', rtl: false },
        { text: 'Skriver hun brev?', rtl: false },
        { text: 'آیا او نامه می‌نویسد؟', rtl: true },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'Letters are written by her.', rtl: false },
        { text: 'Brevene skrives av henne.', rtl: false },
        { text: 'نامه‌ها توسط او نوشته می‌شوند.', rtl: true },
      ],
    ],
  },
  {
    title: 'Present Continuous',
    sectionColor: '#c8e6c9',
    languages: [
      {
        label: 'English',
        color: '#66bb6a',
        lines: [
          'Formula: Subject + am/is/are + verb-ing',
          'Passive formula: Subject + am/is/are + being + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#4caf50',
        lines: [
          'Formula: Subjekt + er + verb-ing',
          'Passive formula: Subjekt + er + partisipp av verb',
        ],
      },
    ],
    signs: {
      color: '#43a047',
      text: 'Signs: Actions happening now or around the present moment.',
    },
    tableHeadColor: '#1b5e20',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She is writing letters.', rtl: false },
        { text: 'او در حال نوشتن نامه است.', rtl: true },
        { text: 'Hun er skriver brev.', rtl: false },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She is not writing letters.', rtl: false },
        { text: 'او در حال نوشتن نامه نیست.', rtl: true },
        { text: 'Hun er ikke skriver brev.', rtl: false },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Is she writing letters?', rtl: false },
        { text: 'آیا او در حال نوشتن نامه است؟', rtl: true },
        { text: 'Er hun skriver brev?', rtl: false },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'Letters are being written by her.', rtl: false },
        { text: 'نامه‌ها توسط او در حال نوشته شدن هستند.', rtl: true },
        { text: 'Brevene er skrives av henne.', rtl: false },
      ],
    ],
  },
  {
    title: 'Present Perfect',
    sectionColor: '#e0f7fa',
    languages: [
      {
        label: 'English',
        color: '#26c6da',
        lines: [
          'Formula: Subject + has/have + past participle',
          'Passive formula: Subject + has/have + been + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#00bcd4',
        lines: [
          'Formula: Subjekt + har + partisipp av verb',
          'Passive formula: Subjekt + har + blitt + partisipp av verb',
        ],
      },
    ],
    signs: {
      color: '#00acc1',
      text: 'Signs: Actions that have been completed at some point in the past but are relevant to the present. ',
    },
    tableHeadColor: '#006064',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She has written a letter.', rtl: false },
        { text: 'او نامه‌ای نوشته است.', rtl: true },
        { text: 'Hun har skrevet et brev.', rtl: false },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She has not written a letter.', rtl: false },
        { text: 'او نامه‌ای ننوشته است.', rtl: true },
        { text: 'Hun har ikke skrevet et brev.', rtl: false },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Has she written a letter?', rtl: false },
        { text: 'آیا او نامه‌ای نوشته است؟', rtl: true },
        { text: 'Har hun skrevet et brev?', rtl: false },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'A letter has been written by her.', rtl: false },
        { text: 'نامه‌ای توسط او نوشته شده است.', rtl: true },
        { text: 'Et brev har blitt skrevet av henne.', rtl: false },
      ],
    ],
  },
  {
    title: 'Simple Past',
    sectionColor: '#e0f2f1',
    languages: [
      {
        label: 'English',
        color: '#26a69a',
        lines: [
          'Formula: Subject + past verb',
          'Passive formula: Subject + was/were + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#009688',
        lines: [
          'Formula: Subjekt + verb (preteritum)',
          'Passive formula: Subjekt + ble + partisipp av verb',
        ],
      },
    ],
    signs: {
      color: '#00897b',
      text: 'Signs: Actions that were completed in the past.',
    },
    tableHeadColor: '#004d40',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She wrote a letter.', rtl: false },
        { text: 'او نامه‌ای نوشت.', rtl: true },
        { text: 'Hun skrev et brev.', rtl: false },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She did not write a letter.', rtl: false },
        { text: 'او نامه‌ای ننوشت.', rtl: true },
        { text: 'Hun skrev ikke et brev.', rtl: false },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Did she write a letter?', rtl: false },
        { text: 'آیا او نامه‌ای نوشت؟', rtl: true },
        { text: 'Skrev hun et brev?', rtl: false },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'A letter was written by her.', rtl: false },
        { text: 'نامه‌ای توسط او نوشته شد.', rtl: true },
        { text: 'Et brev ble skrevet av henne.', rtl: false },
      ],
    ],
  },
  {
    title: 'Past Continuous',
    sectionColor: '#e3f2fd',
    languages: [
      {
        label: 'English',
        color: '#42a5f5',
        lines: [
          'Formula: Subject + was/were + verb-ing',
          'Passive formula: Subject + was/were + being + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#2196f3',
        lines: ['Norwegian grammar does not have this tense.'],
      },
    ],
    signs: {
      color: '#1e88e5',
      text: 'Signs: Actions that were ongoing in the past.',
    },
    tableHeadColor: '#0d47a1',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She was writing a letter.', rtl: false },
        { text: 'او در حال نوشتن نامه بود.', rtl: true },
        { text: 'Norwegian grammar does not have this tense.', rtl: false },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She was not writing a letter.', rtl: false },
        { text: 'او در حال نوشتن نامه نبود.', rtl: true },
        { text: 'Norwegian grammar does not have this tense.', rtl: false },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Was she writing a letter?', rtl: false },
        { text: 'آیا او در حال نوشتن نامه بود؟', rtl: true },
        { text: 'Norwegian grammar does not have this tense.', rtl: false },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'A letter was being written by her.', rtl: false },
        { text: 'نامه‌ای توسط او در حال نوشته شدن بود.', rtl: true },
        { text: 'Norwegian grammar does not have this tense.', rtl: false },
      ],
    ],
  },
  {
    title: 'Past Perfect',
    sectionColor: '#ede7f6',
    languages: [
      {
        label: 'English',
        color: '#7e57c2',
        lines: [
          'Formula: Subject + had + past participle',
          'Passive formula: Subject + had + been + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#673ab7',
        lines: [
          'Formula: Subjekt + hadde + partisipp av verb',
          'Passive formula: Subjekt + hadde + blitt + partisipp av verb',
        ],
      },
    ],
    signs: {
      color: '#5e35b1',
      text: 'Signs: Actions that were completed before another action in the past.',
    },
    tableHeadColor: '#311b92',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She had written a letter.', rtl: false },
        { text: 'او نامه‌ای نوشته بود.', rtl: true },
        { text: 'Hun hadde skrevet et brev.', rtl: false },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She had not written a letter.', rtl: false },
        { text: 'او نامه‌ای ننوشته بود.', rtl: true },
        { text: 'Hun hadde ikke skrevet et brev.', rtl: false },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Had she written a letter?', rtl: false },
        { text: 'آیا او نامه‌ای نوشته بود؟', rtl: true },
        { text: 'Hadde hun skrevet et brev?', rtl: false },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'A letter had been written by her.', rtl: false },
        { text: 'نامه‌ای توسط او نوشته شده بود.', rtl: true },
        { text: 'Et brev hadde blitt skrevet av henne.', rtl: false },
      ],
    ],
  },
  {
    title: 'Future Tense',
    sectionColor: '#ffebee',
    languages: [
      {
        label: 'English',
        color: '#ef5350',
        lines: [
          'Formula: Subject + will + base verb',
          'Passive formula: Subject + will + be + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#f44336',
        lines: [
          'Formula: Subjekt + skal + verb (infinitiv)',
          'Passive formula: Subjekt + skal + bli + partisipp av verb',
        ],
      },
    ],
    signs: {
      color: '#e53935',
      text: 'Signs: Actions that will happen in the future.',
    },
    tableHeadColor: '#b71c1c',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She will write a letter.', rtl: false },
        { text: 'او نامه‌ای خواهد نوشت.', rtl: true },
        { text: 'Hun skal skrive et brev.', rtl: false },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She will not write a letter.', rtl: false },
        { text: 'او نامه‌ای نخواهد نوشت.', rtl: true },
        { text: 'Hun skal ikke skrive et brev.', rtl: false },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Will she write a letter?', rtl: false },
        { text: 'آیا او نامه‌ای خواهد نوشت؟', rtl: true },
        { text: 'Skal hun skrive et brev?', rtl: false },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'A letter will be written by her.', rtl: false },
        { text: 'نامه‌ای توسط او نوشته خواهد شد.', rtl: true },
        { text: 'Et brev skal skrives av henne.', rtl: false },
      ],
    ],
  },
  {
    title: 'Future Perfect',
    sectionColor: '#e8eaf6',
    languages: [
      {
        label: 'English',
        color: '#5c6bc0',
        lines: [
          'Formula: Subject + will have + past participle',
          'Passive formula: Subject + will have + been + past participle',
        ],
      },
      {
        label: 'Norsk',
        color: '#3f51b5',
        lines: [
          'Formula: Subjekt + skal ha + partisipp av verb',
          'Passive formula: Subjekt + skal ha + blitt + partisipp av verb',
        ],
      },
    ],
    signs: {
      color: '#3949ab',
      text: 'Signs: Actions that will be completed before a specific point in the future.',
    },
    tableHeadColor: '#1a237e',
    rows: [
      [
        { text: 'Normal Sentence', rtl: false },
        { text: 'She will have written a letter.', rtl: false },
        { text: 'او نامه‌ای نوشته خواهد بود.', rtl: true },
        { text: 'Hun skal ha skrevet et brev.', rtl: false },
      ],
      [
        { text: 'Negative Sentence', rtl: false },
        { text: 'She will not have written a letter.', rtl: false },
        { text: 'او نامه‌ای ننوشته خواهد بود.', rtl: true },
        { text: 'Hun skal ikke ha skrevet et brev.', rtl: false },
      ],
      [
        { text: 'Question', rtl: false },
        { text: 'Will she have written a letter?', rtl: false },
        { text: 'آیا او نامه‌ای نوشته خواهد بود؟', rtl: true },
        { text: 'Skal hun ha skrevet et brev?', rtl: false },
      ],
      [
        { text: 'Passive Form', rtl: false },
        { text: 'A letter will have been written by her.', rtl: false },
        { text: 'نامه‌ای توسط او نوشته خواهد شد.', rtl: true },
        { text: 'Et brev vil ha blitt skrevet av henne.', rtl: false },
      ],
    ],
  },
];
