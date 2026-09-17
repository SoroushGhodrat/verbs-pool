import React, { useMemo, useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { UkFlag, NoFlag } from './styles/Flags';
import { CloseIcon, ExpandMoreIcon } from './UI/icons';
import { sentenceCategories } from '../data/sentences';
import { CefrLevel, SentencePair } from '../types/types';

const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1'];

const levelClass: Record<CefrLevel, string> = {
  A1: 'bg-success/15 text-success',
  A2: 'bg-info/15 text-info',
  B1: 'bg-warning/15 text-warning',
};

const SentenceRow = ({ sentence }: { sentence: SentencePair }) => (
  <li className="rounded-lg bg-alphabet-box/40 px-4 py-3">
    <div className="flex items-start gap-2">
      <NoFlag className="mt-1.5 shrink-0" />
      <p className="text-base">{sentence.no}</p>
    </div>
    <div className="flex items-start gap-2">
      <UkFlag className="mt-1.5 shrink-0" />
      <p className="text-base text-black/70">{sentence.en}</p>
    </div>
    {sentence.note && (
      <p className="mt-1 pl-6 text-xs italic text-black/50">{sentence.note}</p>
    )}
  </li>
);

const UsefulSentencesdescription: React.FC = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<CefrLevel | null>(null);

  const categories = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return sentenceCategories
      .filter((category) => !level || category.level === level)
      .map((category) => ({
        ...category,
        sentences: needle
          ? category.sentences.filter(
              (sentence) =>
                sentence.no.toLowerCase().includes(needle) ||
                sentence.en.toLowerCase().includes(needle)
            )
          : category.sentences,
      }))
      .filter((category) => category.sentences.length > 0);
  }, [query, level]);

  const total = categories.reduce((sum, c) => sum + c.sentences.length, 0);
  const isFiltering = query.trim().length > 0 || level !== null;

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <h1 className="py-6 text-center text-3xl font-semibold">
        {t('sentences.title')}
      </h1>
      <p className="mb-6 text-base text-black/70">{t('sentences.intro')}</p>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3">
        <div className="relative">
          <label htmlFor="sentence-search" className="sr-only">
            {t('sentences.searchLabel')}
          </label>
          <input
            id="sentence-search"
            type="search"
            value={query}
            placeholder={t('sentences.searchLabel')}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-lg border border-black/20 bg-white py-2.5 pl-3 pr-12 text-base outline-none transition-colors hover:border-black/40 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label={t('sentences.searchClear')}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition-colors hover:bg-black/5"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setLevel(null)}
            aria-pressed={level === null}
            className={`rounded-full px-3 py-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              level === null
                ? 'bg-primary text-white'
                : 'bg-black/5 hover:bg-black/10'
            }`}
          >
            {t('sentences.allLevels')}
          </button>
          {LEVELS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setLevel(value)}
              aria-pressed={level === value}
              className={`rounded-full px-3 py-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                level === value
                  ? 'bg-primary text-white'
                  : 'bg-black/5 hover:bg-black/10'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mb-4 text-sm text-black/60">
        {t('sentences.countLabel', { count: total })}
      </p>

      {categories.length === 0 && (
        <p className="rounded-lg bg-white p-6 text-center text-sm shadow-sm">
          {t('sentences.noMatches')}
        </p>
      )}

      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <Disclosure
            // `defaultOpen` is only read on mount, so the key includes the
            // filtering state to remount and reveal matches as they appear.
            key={`${category.id}-${isFiltering}`}
            as="div"
            className="overflow-hidden rounded-lg bg-white shadow-sm"
            defaultOpen={isFiltering}
          >
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary">
                  <span
                    className={`rounded px-1.5 py-0.5 text-xs font-semibold ${levelClass[category.level]}`}
                  >
                    {category.level}
                  </span>
                  <span className="grow font-medium">
                    {t(`sentences.categories.${category.id}`)}
                  </span>
                  <span className="text-sm text-black/50">
                    {category.sentences.length}
                  </span>
                  <ExpandMoreIcon
                    className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </DisclosureButton>
                <DisclosurePanel>
                  <ul className="flex flex-col gap-2 px-4 pb-4">
                    {category.sentences.map((sentence) => (
                      <SentenceRow key={sentence.no} sentence={sentence} />
                    ))}
                  </ul>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default UsefulSentencesdescription;
