import React from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { UkFlag, NoFlag } from './styles/Flags';
import { randonColor } from '../util/helper';
import { ExpandMoreIcon } from './UI/icons';

interface FlagTextPairProps {
  FlagComponent: React.ElementType;
  text: string;
}

const FlagTextPair: React.FC<FlagTextPairProps> = ({ FlagComponent, text }) => {
  return (
    <div className="flex items-center gap-1">
      <FlagComponent />
      <p className="text-[20px]">{text}</p>
    </div>
  );
};

/** Norwegian/English sentence pairs, grouped as they render in the panel. */
const opinionSentences: { no: string; en: string }[] = [
  { no: 'Jeg gleder meg til å ...', en: 'I am looking forward to ...' },
  { no: 'Jeg har lyst til å ...', en: 'I want to ...' },
  { no: 'Jeg er fornøyd med ...', en: 'I am satisfied with ...' },
  { no: 'Jeg har tenkt å ...', en: 'I intend to ...' },
  { no: 'Jeg drømmer om å ...', en: 'I dream of ...' },
];

const UsefulSentencesdescription: React.FC = () => {
  return (
    <div className="mx-auto my-2 max-w-3xl px-4 md:my-4">
      <div className="rounded bg-white p-1 shadow-md md:p-4">
        <div>
          <h1 className="mb-2 text-center text-3xl">Useful Sentences</h1>
          <p className="mb-4 text-base">
            Here are some useful sentences to help you practice your English and
            Norwegian skills in a variety of common situations.
          </p>
        </div>

        <Disclosure>
          {({ open, close }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between bg-[#7FCDCD] px-4 py-3 text-left capitalize">
                <span>Talk about opinions</span>
                <ExpandMoreIcon
                  className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 py-2">
                {opinionSentences.map((sentence, index) => (
                  <div
                    key={sentence.no}
                    className={`rounded-2xl px-4 py-1 ${index > 0 ? 'mt-1' : ''}`}
                    style={{ backgroundColor: randonColor() }}
                  >
                    <FlagTextPair FlagComponent={NoFlag} text={sentence.no} />
                    <FlagTextPair FlagComponent={UkFlag} text={sentence.en} />
                  </div>
                ))}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => close()}
                    className="mt-4 rounded border border-primary px-4 py-1.5 text-sm uppercase text-primary transition-colors hover:bg-primary/5"
                  >
                    Close
                  </button>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between border-t border-black/10 px-4 py-3 text-left">
                <span>Accordion 2</span>
                <ExpandMoreIcon
                  className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 py-2">
                Accordion 2
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default UsefulSentencesdescription;
