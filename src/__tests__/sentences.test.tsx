import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen } from '../test-utils';
import UsefulSentencesdescription from '../components/UsefulSentencesdescription';
import { sentenceCategories } from '../data/sentences';

describe('Useful sentences page', () => {
  it('renders a collapsed section per category', () => {
    renderWithProviders(<UsefulSentencesdescription />);
    expect(screen.getByText('Useful Sentences')).toBeInTheDocument();
    expect(screen.getByText('Greetings & politeness')).toBeInTheDocument();
    expect(screen.getByText('Opinions & feelings')).toBeInTheDocument();
    // Collapsed by default, so sentences are not in the document yet.
    expect(screen.queryByText('Hei, hvordan går det?')).not.toBeInTheDocument();
  });

  it('reveals sentence pairs when a category is opened', async () => {
    const user = userEvent.setup();
    renderWithProviders(<UsefulSentencesdescription />);

    await user.click(screen.getByText('Greetings & politeness'));

    expect(screen.getByText('Hei, hvordan går det?')).toBeInTheDocument();
    expect(screen.getByText('Hi, how are you?')).toBeInTheDocument();
  });

  it('filters by CEFR level', async () => {
    const user = userEvent.setup();
    renderWithProviders(<UsefulSentencesdescription />);

    await user.click(screen.getByRole('button', { name: 'A1' }));

    expect(screen.getByText('Greetings & politeness')).toBeInTheDocument();
    // Opinions is B1, so it drops out.
    expect(screen.queryByText('Opinions & feelings')).not.toBeInTheDocument();
  });

  it('searches across both languages', async () => {
    const user = userEvent.setup();
    renderWithProviders(<UsefulSentencesdescription />);

    await user.type(screen.getByLabelText('Search sentences'), 'paraply');

    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.queryByText('Housing')).not.toBeInTheDocument();
    // Matching categories auto-open so the hit is visible.
    expect(screen.getByText('Husk å ta med paraply.')).toBeInTheDocument();
  });

  it('reports when nothing matches', async () => {
    const user = userEvent.setup();
    renderWithProviders(<UsefulSentencesdescription />);

    await user.type(screen.getByLabelText('Search sentences'), 'zzzzz');

    expect(
      screen.getByText('No sentences match your search.')
    ).toBeInTheDocument();
  });
});

describe('flag icons', () => {
  it('keeps its size when the caller passes a className', async () => {
    const user = userEvent.setup();
    renderWithProviders(<UsefulSentencesdescription />);
    await user.click(screen.getByText('Greetings & politeness'));

    // Spreading props over className used to drop the sizing classes, which
    // rendered the source image at its natural 64x46.
    for (const flag of screen.getAllByAltText(/Flag/)) {
      expect(flag.className).toContain('h-5');
      expect(flag.className).toContain('w-5');
    }
  });
});

describe('sentence data', () => {
  it('has no duplicate Norwegian sentences', () => {
    const all = sentenceCategories.flatMap((c) => c.sentences.map((s) => s.no));
    expect(all.length - new Set(all).size).toBe(0);
  });

  it('gives every pair both languages', () => {
    for (const category of sentenceCategories) {
      expect(category.sentences.length).toBeGreaterThan(0);
      for (const sentence of category.sentences) {
        expect(sentence.no.trim()).not.toBe('');
        expect(sentence.en.trim()).not.toBe('');
      }
    }
  });
});
