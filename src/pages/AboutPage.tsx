import React, { useState } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ExpandMoreIcon } from '../components/UI/icons';

const feedbackTypes = [
  { value: 'english-verb', label: 'English Verb' },
  { value: 'norsk-verb', label: 'Norsk Verb' },
  { value: 'grammar', label: 'Grammar' },
];

const AboutPage: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Feedback Type:', feedbackType);
    console.log('Message:', message);
    // Reset form
    setFeedbackType('');
    setMessage('');
  };

  const selectedLabel =
    feedbackTypes.find((type) => type.value === feedbackType)?.label ?? '';

  return (
    <div className="mx-auto my-4 max-w-3xl px-4">
      <div className="rounded bg-white shadow-md">
        <div className="p-4">
          <h1 className="mb-2 text-4xl">About This App</h1>
          <p className="mb-4 text-base">
            Welcome to the Verbs Pool app! This application is currently in beta
            version and may contain potential mistakes in grammar or
            definitions. We are continuously working to improve the app and
            appreciate your understanding and feedback.
          </p>
          <p className="mb-4 text-base">
            The Verbs Pool app aims to help users learn and practice verbs in
            both English and Norwegian. You can explore different verb forms,
            their meanings, and examples of usage in sentences.
          </p>
          <p className="mb-4 text-base">
            If you encounter any issues or have suggestions for improvement,
            please feel free to contact us. Your feedback is valuable in making
            this app better for everyone.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <Listbox value={feedbackType} onChange={setFeedbackType}>
              <div className="relative mb-4">
                <label className="mb-1 block text-sm text-black/60">
                  Feedback Type
                </label>
                <ListboxButton className="flex w-full items-center justify-between rounded border border-black/25 px-3 py-4 text-left transition-colors hover:border-black/60 focus:border-primary focus:outline-none">
                  <span>{selectedLabel || '\u00A0'}</span>
                  <ExpandMoreIcon className="h-5 w-5" />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  className="z-50 w-[var(--button-width)] rounded bg-white py-2 shadow-lg focus:outline-none"
                >
                  {feedbackTypes.map((type) => (
                    <ListboxOption
                      key={type.value}
                      value={type.value}
                      className="cursor-pointer px-4 py-2 data-[focus]:bg-black/5 data-[selected]:font-semibold"
                    >
                      {type.label}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-1 block text-sm text-black/60"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={handleMessageChange}
                className="w-full rounded border border-black/25 px-3 py-2 transition-colors hover:border-black/60 focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded bg-primary px-4 py-1.5 text-sm uppercase text-white shadow transition-colors hover:bg-primary/90"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
