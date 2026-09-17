import { TenseSection } from '../types/types';

/**
 * Tense reference content for the English Grammar page.
 *
 * Example sentences are the teaching material and stay as they are; only
 * labels and descriptions carry a Norwegian variant. UI chrome (headings,
 * column names, the Formula/Signs labels) lives in the locale files.
 */
export const tenseSections: TenseSection[] = [
  {
    title: 'Simple Present',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + base verb' },
          { kind: 'passive', value: 'Subject + am/is/are + past participle' },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          { kind: 'formula', value: 'Subjekt + verb (presens)' },
          { kind: 'passive', value: 'Subjekt + er + partisipp av verb' },
        ],
      },
    ],
    signs: {
      en: 'Habitual actions, routines, facts, general truths.',
      no: 'Vanehandlinger, rutiner, fakta og allmenne sannheter.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She writes letters.',
        no: 'Hun skriver brev.',
        fa: 'او نامه می‌نویسد.',
      },
      {
        kind: 'negative',
        en: 'She does not write letters.',
        no: 'Hun skriver ikke brev.',
        fa: 'او نامه نمی‌نویسد.',
      },
      {
        kind: 'question',
        en: 'Does she write letters?',
        no: 'Skriver hun brev?',
        fa: 'آیا او نامه می‌نویسد؟',
      },
      {
        kind: 'passive',
        en: 'Letters are written by her.',
        no: 'Brevene skrives av henne.',
        fa: 'نامه‌ها توسط او نوشته می‌شوند.',
      },
    ],
  },
  {
    title: 'Present Continuous',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + am/is/are + verb-ing' },
          {
            kind: 'passive',
            value: 'Subject + am/is/are + being + past participle',
          },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          { kind: 'formula', value: 'Subjekt + er + verb-ing' },
          { kind: 'passive', value: 'Subjekt + er + partisipp av verb' },
        ],
      },
    ],
    signs: {
      en: 'Actions happening now or around the present moment.',
      no: 'Handlinger som skjer nå eller rundt nåtidspunktet.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She is writing letters.',
        no: 'Hun er skriver brev.',
        fa: 'او در حال نوشتن نامه است.',
      },
      {
        kind: 'negative',
        en: 'She is not writing letters.',
        no: 'Hun er ikke skriver brev.',
        fa: 'او در حال نوشتن نامه نیست.',
      },
      {
        kind: 'question',
        en: 'Is she writing letters?',
        no: 'Er hun skriver brev?',
        fa: 'آیا او در حال نوشتن نامه است؟',
      },
      {
        kind: 'passive',
        en: 'Letters are being written by her.',
        no: 'Brevene er skrives av henne.',
        fa: 'نامه‌ها توسط او در حال نوشته شدن هستند.',
      },
    ],
  },
  {
    title: 'Present Perfect',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + has/have + past participle' },
          {
            kind: 'passive',
            value: 'Subject + has/have + been + past participle',
          },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          { kind: 'formula', value: 'Subjekt + har + partisipp av verb' },
          {
            kind: 'passive',
            value: 'Subjekt + har + blitt + partisipp av verb',
          },
        ],
      },
    ],
    signs: {
      en: 'Actions that have been completed at some point in the past but are relevant to the present.',
      no: 'Handlinger som er fullført på et tidspunkt i fortiden, men som er relevante for nåtiden.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She has written a letter.',
        no: 'Hun har skrevet et brev.',
        fa: 'او نامه‌ای نوشته است.',
      },
      {
        kind: 'negative',
        en: 'She has not written a letter.',
        no: 'Hun har ikke skrevet et brev.',
        fa: 'او نامه‌ای ننوشته است.',
      },
      {
        kind: 'question',
        en: 'Has she written a letter?',
        no: 'Har hun skrevet et brev?',
        fa: 'آیا او نامه‌ای نوشته است؟',
      },
      {
        kind: 'passive',
        en: 'A letter has been written by her.',
        no: 'Et brev har blitt skrevet av henne.',
        fa: 'نامه‌ای توسط او نوشته شده است.',
      },
    ],
  },
  {
    title: 'Simple Past',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + past verb' },
          { kind: 'passive', value: 'Subject + was/were + past participle' },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          { kind: 'formula', value: 'Subjekt + verb (preteritum)' },
          { kind: 'passive', value: 'Subjekt + ble + partisipp av verb' },
        ],
      },
    ],
    signs: {
      en: 'Actions that were completed in the past.',
      no: 'Handlinger som ble fullført i fortiden.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She wrote a letter.',
        no: 'Hun skrev et brev.',
        fa: 'او نامه‌ای نوشت.',
      },
      {
        kind: 'negative',
        en: 'She did not write a letter.',
        no: 'Hun skrev ikke et brev.',
        fa: 'او نامه‌ای ننوشت.',
      },
      {
        kind: 'question',
        en: 'Did she write a letter?',
        no: 'Skrev hun et brev?',
        fa: 'آیا او نامه‌ای نوشت؟',
      },
      {
        kind: 'passive',
        en: 'A letter was written by her.',
        no: 'Et brev ble skrevet av henne.',
        fa: 'نامه‌ای توسط او نوشته شد.',
      },
    ],
  },
  {
    title: 'Past Continuous',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + was/were + verb-ing' },
          {
            kind: 'passive',
            value: 'Subject + was/were + being + past participle',
          },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          {
            kind: 'note',
            value: 'Norwegian grammar does not have this tense.',
            valueNo: 'Norsk grammatikk har ikke denne tiden.',
          },
        ],
      },
    ],
    signs: {
      en: 'Actions that were ongoing in the past.',
      no: 'Handlinger som pågikk i fortiden.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She was writing a letter.',
        no: 'Norwegian grammar does not have this tense.',
        fa: 'او در حال نوشتن نامه بود.',
      },
      {
        kind: 'negative',
        en: 'She was not writing a letter.',
        no: 'Norwegian grammar does not have this tense.',
        fa: 'او در حال نوشتن نامه نبود.',
      },
      {
        kind: 'question',
        en: 'Was she writing a letter?',
        no: 'Norwegian grammar does not have this tense.',
        fa: 'آیا او در حال نوشتن نامه بود؟',
      },
      {
        kind: 'passive',
        en: 'A letter was being written by her.',
        no: 'Norwegian grammar does not have this tense.',
        fa: 'نامه‌ای توسط او در حال نوشته شدن بود.',
      },
    ],
  },
  {
    title: 'Past Perfect',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + had + past participle' },
          { kind: 'passive', value: 'Subject + had + been + past participle' },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          { kind: 'formula', value: 'Subjekt + hadde + partisipp av verb' },
          {
            kind: 'passive',
            value: 'Subjekt + hadde + blitt + partisipp av verb',
          },
        ],
      },
    ],
    signs: {
      en: 'Actions that were completed before another action in the past.',
      no: 'Handlinger som ble fullført før en annen handling i fortiden.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She had written a letter.',
        no: 'Hun hadde skrevet et brev.',
        fa: 'او نامه‌ای نوشته بود.',
      },
      {
        kind: 'negative',
        en: 'She had not written a letter.',
        no: 'Hun hadde ikke skrevet et brev.',
        fa: 'او نامه‌ای ننوشته بود.',
      },
      {
        kind: 'question',
        en: 'Had she written a letter?',
        no: 'Hadde hun skrevet et brev?',
        fa: 'آیا او نامه‌ای نوشته بود؟',
      },
      {
        kind: 'passive',
        en: 'A letter had been written by her.',
        no: 'Et brev hadde blitt skrevet av henne.',
        fa: 'نامه‌ای توسط او نوشته شده بود.',
      },
    ],
  },
  {
    title: 'Future Tense',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + will + base verb' },
          { kind: 'passive', value: 'Subject + will + be + past participle' },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          { kind: 'formula', value: 'Subjekt + skal + verb (infinitiv)' },
          {
            kind: 'passive',
            value: 'Subjekt + skal + bli + partisipp av verb',
          },
        ],
      },
    ],
    signs: {
      en: 'Actions that will happen in the future.',
      no: 'Handlinger som vil skje i framtiden.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She will write a letter.',
        no: 'Hun skal skrive et brev.',
        fa: 'او نامه‌ای خواهد نوشت.',
      },
      {
        kind: 'negative',
        en: 'She will not write a letter.',
        no: 'Hun skal ikke skrive et brev.',
        fa: 'او نامه‌ای نخواهد نوشت.',
      },
      {
        kind: 'question',
        en: 'Will she write a letter?',
        no: 'Skal hun skrive et brev?',
        fa: 'آیا او نامه‌ای خواهد نوشت؟',
      },
      {
        kind: 'passive',
        en: 'A letter will be written by her.',
        no: 'Et brev skal skrives av henne.',
        fa: 'نامه‌ای توسط او نوشته خواهد شد.',
      },
    ],
  },
  {
    title: 'Future Perfect',
    languages: [
      {
        label: 'English',
        lines: [
          { kind: 'formula', value: 'Subject + will have + past participle' },
          {
            kind: 'passive',
            value: 'Subject + will have + been + past participle',
          },
        ],
      },
      {
        label: 'Norsk',
        lines: [
          { kind: 'formula', value: 'Subjekt + skal ha + partisipp av verb' },
          {
            kind: 'passive',
            value: 'Subjekt + skal ha + blitt + partisipp av verb',
          },
        ],
      },
    ],
    signs: {
      en: 'Actions that will be completed before a specific point in the future.',
      no: 'Handlinger som vil være fullført før et bestemt tidspunkt i framtiden.',
    },
    rows: [
      {
        kind: 'normal',
        en: 'She will have written a letter.',
        no: 'Hun skal ha skrevet et brev.',
        fa: 'او نامه‌ای نوشته خواهد بود.',
      },
      {
        kind: 'negative',
        en: 'She will not have written a letter.',
        no: 'Hun skal ikke ha skrevet et brev.',
        fa: 'او نامه‌ای ننوشته خواهد بود.',
      },
      {
        kind: 'question',
        en: 'Will she have written a letter?',
        no: 'Skal hun ha skrevet et brev?',
        fa: 'آیا او نامه‌ای نوشته خواهد بود؟',
      },
      {
        kind: 'passive',
        en: 'A letter will have been written by her.',
        no: 'Et brev vil ha blitt skrevet av henne.',
        fa: 'نامه‌ای توسط او نوشته خواهد شد.',
      },
    ],
  },
];
