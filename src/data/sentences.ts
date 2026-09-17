import { SentenceCategory } from '../types/types';

/**
 * Useful sentence frames, grouped by communicative function and tagged with a
 * CEFR level. The grouping follows the public Norskprøven topic framework that
 * the common course books are organised around; the sentences themselves are
 * written for this app.
 *
 * Most entries are deliberately frames ending in "..." rather than complete
 * sentences - learners get more out of a pattern they can fill in than out of
 * a fixed example.
 */
export const sentenceCategories: SentenceCategory[] = [
  {
    id: 'greetings',
    level: 'A1',
    sentences: [
      { no: 'Hei, hvordan går det?', en: 'Hi, how are you?' },
      { no: 'Takk, bare bra.', en: 'Fine, thanks.' },
      { no: 'Hyggelig å møte deg.', en: 'Nice to meet you.' },
      { no: 'Ha det bra!', en: 'Goodbye!' },
      { no: 'Vi ses!', en: 'See you!' },
      { no: 'Unnskyld, kan du hjelpe meg?', en: 'Excuse me, can you help me?' },
      {
        no: 'Tusen takk for hjelpen.',
        en: 'Thank you very much for the help.',
      },
      {
        no: 'Ingen årsak.',
        en: "You're welcome.",
        note: 'Literally "no cause" - the standard reply to takk.',
      },
      {
        no: 'Kan du snakke litt saktere?',
        en: 'Could you speak a bit slower?',
      },
      { no: 'Jeg forstår ikke.', en: 'I do not understand.' },
      { no: 'Kan du gjenta det?', en: 'Could you repeat that?' },
      { no: 'Beklager, jeg er sen.', en: 'Sorry, I am late.' },
    ],
  },
  {
    id: 'personal',
    level: 'A1',
    sentences: [
      { no: 'Jeg heter ...', en: 'My name is ...' },
      { no: 'Jeg kommer fra ...', en: 'I come from ...' },
      { no: 'Jeg bor i ...', en: 'I live in ...' },
      { no: 'Jeg er ... år gammel.', en: 'I am ... years old.' },
      { no: 'Jeg snakker litt norsk.', en: 'I speak a little Norwegian.' },
      { no: 'Jeg har to barn.', en: 'I have two children.' },
      { no: 'Jeg er gift.', en: 'I am married.' },
      { no: 'Jeg er singel.', en: 'I am single.' },
      { no: 'Dette er kona mi.', en: 'This is my wife.' },
      { no: 'Dette er mannen min.', en: 'This is my husband.' },
      { no: 'Jeg jobber som ...', en: 'I work as ...' },
      { no: 'Hva heter du?', en: 'What is your name?' },
      { no: 'Hvor kommer du fra?', en: 'Where are you from?' },
    ],
  },
  {
    id: 'timeAndDate',
    level: 'A1',
    sentences: [
      { no: 'Hva er klokka?', en: 'What time is it?' },
      { no: 'Klokka er ti over tre.', en: 'It is ten past three.' },
      { no: 'I dag er det mandag.', en: 'Today is Monday.' },
      { no: 'I morgen skal jeg ...', en: 'Tomorrow I am going to ...' },
      { no: 'I går var jeg ...', en: 'Yesterday I was ...' },
      { no: 'Jeg har time klokka ...', en: 'I have an appointment at ...' },
      { no: 'Når åpner dere?', en: 'When do you open?' },
      { no: 'Vi møtes klokka ...', en: 'We are meeting at ...' },
      { no: 'Det tar omtrent ti minutter.', en: 'It takes about ten minutes.' },
      { no: 'Jeg kommer om en halvtime.', en: 'I will come in half an hour.' },
    ],
  },
  {
    id: 'shopping',
    level: 'A2',
    sentences: [
      { no: 'Hva koster det?', en: 'How much does it cost?' },
      { no: 'Kan jeg betale med kort?', en: 'Can I pay by card?' },
      { no: 'Jeg bare ser, takk.', en: 'I am just looking, thanks.' },
      {
        no: 'Har dere denne i en annen størrelse?',
        en: 'Do you have this in another size?',
      },
      {
        no: 'Jeg vil gjerne bytte denne.',
        en: 'I would like to exchange this.',
      },
      { no: 'Kan jeg få kvittering?', en: 'Could I have a receipt?' },
      { no: 'Hvor finner jeg ...?', en: 'Where do I find ...?' },
      { no: 'Det er for dyrt.', en: 'That is too expensive.' },
      { no: 'Jeg tar denne.', en: 'I will take this one.' },
      { no: 'Er det noe på tilbud?', en: 'Is anything on offer?' },
    ],
  },
  {
    id: 'directions',
    level: 'A2',
    sentences: [
      { no: 'Unnskyld, hvor ligger ...?', en: 'Excuse me, where is ...?' },
      { no: 'Hvordan kommer jeg meg til ...?', en: 'How do I get to ...?' },
      { no: 'Gå rett fram.', en: 'Go straight ahead.' },
      { no: 'Ta til høyre.', en: 'Turn right.' },
      { no: 'Ta til venstre.', en: 'Turn left.' },
      { no: 'Det er like ved.', en: 'It is close by.' },
      { no: 'Hvilken buss går til ...?', en: 'Which bus goes to ...?' },
      { no: 'Når går neste tog?', en: 'When does the next train leave?' },
      { no: 'Går dette toget til ...?', en: 'Does this train go to ...?' },
      { no: 'Jeg har gått meg bort.', en: 'I have got lost.' },
      { no: 'Hvor lang tid tar det?', en: 'How long does it take?' },
    ],
  },
  {
    id: 'housing',
    level: 'A2',
    sentences: [
      { no: 'Jeg leier en leilighet i ...', en: 'I rent a flat in ...' },
      { no: 'Leiligheten har to soverom.', en: 'The flat has two bedrooms.' },
      { no: 'Hvor mye er husleien?', en: 'How much is the rent?' },
      { no: 'Er strøm inkludert?', en: 'Is electricity included?' },
      {
        no: 'Vaskemaskinen virker ikke.',
        en: 'The washing machine does not work.',
      },
      { no: 'Kan du sende en rørlegger?', en: 'Could you send a plumber?' },
      {
        no: 'Jeg vil gjerne si opp leiligheten.',
        en: 'I would like to give notice on the flat.',
      },
      { no: 'Vi flytter inn den ...', en: 'We are moving in on the ...' },
      { no: 'Naboene er hyggelige.', en: 'The neighbours are nice.' },
    ],
  },
  {
    id: 'weather',
    level: 'A2',
    sentences: [
      { no: 'Hvordan er været i dag?', en: 'What is the weather like today?' },
      { no: 'Det regner.', en: 'It is raining.' },
      { no: 'Det snør.', en: 'It is snowing.' },
      { no: 'Det er kaldt ute.', en: 'It is cold outside.' },
      { no: 'Sola skinner.', en: 'The sun is shining.' },
      { no: 'Det blåser mye.', en: 'It is very windy.' },
      {
        no: 'Det skal bli finere vær i morgen.',
        en: 'The weather is supposed to be nicer tomorrow.',
      },
      { no: 'Husk å ta med paraply.', en: 'Remember to bring an umbrella.' },
    ],
  },
  {
    id: 'health',
    level: 'B1',
    sentences: [
      {
        no: 'Jeg vil gjerne bestille time hos legen.',
        en: 'I would like to book an appointment with the doctor.',
      },
      { no: 'Jeg har vondt i ...', en: 'My ... hurts.' },
      {
        no: 'Jeg har hatt feber i to dager.',
        en: 'I have had a fever for two days.',
      },
      { no: 'Jeg er allergisk mot ...', en: 'I am allergic to ...' },
      {
        no: 'Kan du skrive ut en resept?',
        en: 'Could you write a prescription?',
      },
      { no: 'Hvor er nærmeste apotek?', en: 'Where is the nearest pharmacy?' },
      {
        no: 'Jeg må sykmelde meg.',
        en: 'I need to report sick.',
        note: 'Used for formally reporting sick leave to an employer.',
      },
      { no: 'Det gjør vondt her.', en: 'It hurts here.' },
      { no: 'Jeg føler meg bedre nå.', en: 'I feel better now.' },
    ],
  },
  {
    id: 'work',
    level: 'B1',
    sentences: [
      {
        no: 'Jeg søker på stillingen som ...',
        en: 'I am applying for the position as ...',
      },
      { no: 'Jeg har erfaring med ...', en: 'I have experience with ...' },
      { no: 'Jeg jobber best i team.', en: 'I work best in a team.' },
      { no: 'Kan vi avtale et møte?', en: 'Could we arrange a meeting?' },
      { no: 'Jeg er tilgjengelig fra ...', en: 'I am available from ...' },
      {
        no: 'Jeg vil gjerne lære mer om ...',
        en: 'I would like to learn more about ...',
      },
      {
        no: 'Kan du sende meg oppdateringen?',
        en: 'Could you send me the update?',
      },
      { no: 'Jeg rekker ikke fristen.', en: 'I will not make the deadline.' },
      { no: 'Jeg tar ferie i uke ...', en: 'I am taking holiday in week ...' },
    ],
  },
  {
    id: 'opinions',
    level: 'B1',
    sentences: [
      { no: 'Jeg gleder meg til å ...', en: 'I am looking forward to ...' },
      { no: 'Jeg har lyst til å ...', en: 'I want to ...' },
      { no: 'Jeg er fornøyd med ...', en: 'I am satisfied with ...' },
      { no: 'Jeg har tenkt å ...', en: 'I intend to ...' },
      { no: 'Jeg drømmer om å ...', en: 'I dream of ...' },
      { no: 'Jeg synes at ...', en: 'I think that ...' },
      { no: 'Etter min mening ...', en: 'In my opinion ...' },
      { no: 'Jeg er redd for at ...', en: 'I am afraid that ...' },
      { no: 'Jeg håper at ...', en: 'I hope that ...' },
      { no: 'Det er viktig for meg å ...', en: 'It is important to me to ...' },
    ],
  },
  {
    id: 'agreement',
    level: 'B1',
    sentences: [
      { no: 'Jeg er helt enig.', en: 'I completely agree.' },
      { no: 'Det har du rett i.', en: 'You are right about that.' },
      { no: 'Jeg er ikke helt enig.', en: 'I do not quite agree.' },
      { no: 'Jeg ser det annerledes.', en: 'I see it differently.' },
      {
        no: 'På den ene siden ..., på den andre siden ...',
        en: 'On the one hand ..., on the other hand ...',
      },
      { no: 'Det kommer an på.', en: 'It depends.' },
      { no: 'Kanskje, men ...', en: 'Maybe, but ...' },
      {
        no: 'Jeg forstår hva du mener, men ...',
        en: 'I understand what you mean, but ...',
      },
    ],
  },
  {
    id: 'smallTalk',
    level: 'B1',
    sentences: [
      { no: 'Hva gjorde du i helga?', en: 'What did you do at the weekend?' },
      {
        no: 'Har du noen planer i sommer?',
        en: 'Do you have any plans this summer?',
      },
      { no: 'Så hyggelig å høre!', en: 'So nice to hear!' },
      { no: 'Det høres spennende ut.', en: 'That sounds exciting.' },
      { no: 'Hvordan går det med familien?', en: 'How is the family?' },
      {
        no: 'Lenge siden sist!',
        en: 'Long time no see!',
        note: 'Literally "long since last" - very common spoken greeting.',
      },
      { no: 'Vi må ta en kaffe snart.', en: 'We should have a coffee soon.' },
    ],
  },
];
