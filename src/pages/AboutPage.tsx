import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ExpandMoreIcon } from '../components/UI/icons';

const feedbackTypes = [
  { value: 'english-verb', labelKey: 'about.types.englishVerb' },
  { value: 'norsk-verb', labelKey: 'about.types.norskVerb' },
  { value: 'grammar', labelKey: 'about.types.grammar' },
];

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<{
    kind: 'error' | 'info';
    text: string;
  } | null>(null);

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!feedbackType) {
      setStatus({ kind: 'error', text: t('about.errorType') });
      return;
    }
    if (message.trim().length < 10) {
      setStatus({
        kind: 'error',
        text: t('about.errorMessage'),
      });
      return;
    }

    // No submission endpoint is configured yet, so say so rather than
    // claiming the feedback was sent.
    setStatus({
      kind: 'info',
      text: t('about.notConnected'),
    });
  };

  const selectedType = feedbackTypes.find(
    (type) => type.value === feedbackType
  );
  const selectedLabel = selectedType ? t(selectedType.labelKey) : '';

  return (
    <div className="mx-auto my-4 max-w-3xl px-4">
      <div className="rounded bg-card shadow-md">
        <div className="p-4">
          <h1 className="mb-2 text-4xl">{t('about.title')}</h1>
          <p className="mb-4 text-base">{t('about.beta')}</p>
          <p className="mb-4 text-base">{t('about.purpose')}</p>
          <p className="mb-4 text-base">{t('about.contact')}</p>

          <form onSubmit={handleSubmit} className="mt-8">
            <Field className="relative mb-4 block">
              <Listbox value={feedbackType} onChange={setFeedbackType}>
                <Label className="mb-1 block text-sm text-muted">
                  {t('about.feedbackType')}
                </Label>
                <ListboxButton className="flex w-full items-center justify-between rounded border border-line px-3 py-4 text-left transition-colors hover:border-ink/60 focus:border-primary focus:outline-none">
                  <span>{selectedLabel || '\u00A0'}</span>
                  <ExpandMoreIcon className="h-5 w-5" />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  className="z-50 w-[var(--button-width)] rounded bg-card py-2 shadow-lg focus:outline-none"
                >
                  {feedbackTypes.map((type) => (
                    <ListboxOption
                      key={type.value}
                      value={type.value}
                      className="cursor-pointer px-4 py-2 data-[focus]:bg-hover data-[selected]:font-semibold"
                    >
                      {t(type.labelKey)}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </Field>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-1 block text-sm text-muted"
              >
                {t('about.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={handleMessageChange}
                className="w-full rounded border border-line px-3 py-2 transition-colors hover:border-ink/60 focus:border-primary focus:outline-none"
              />
            </div>

            <p role="status" aria-live="polite" className="mb-2 text-sm">
              {status ? (
                <span
                  className={status.kind === 'error' ? 'text-error' : undefined}
                >
                  {status.text}
                </span>
              ) : null}
            </p>

            <button
              type="submit"
              className="rounded bg-primary px-4 py-1.5 text-sm uppercase text-on-primary shadow transition-colors hover:bg-primary/90"
            >
              {t('about.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
