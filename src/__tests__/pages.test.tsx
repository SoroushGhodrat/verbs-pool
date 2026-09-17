import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../test-utils';
import NorwegianVerbsDataTable from '../components/NorwegianVerbsDataTable';
import EnglishVerbsDataTable from '../components/EnglishVerbsDataTable';
import EnglishGrammarDescriptions from '../components/EnglishGrammarDescriptions';
import UsefulSentencesdescription from '../components/UsefulSentencesdescription';
import AboutPage from '../pages/AboutPage';
import Navbar from '../components/common/Navbar';

describe('Norwegian verbs table', () => {
  it('renders verb data in a table', () => {
    renderWithProviders(<NorwegianVerbsDataTable />);
    expect(screen.getByText('å adlyde')).toBeInTheDocument();
    expect(screen.getAllByRole('table').length).toBeGreaterThan(0);
  });

  it('renders the Norwegian column headers', () => {
    renderWithProviders(<NorwegianVerbsDataTable />);
    expect(screen.getAllByText('Infinitiv').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Preteritum').length).toBeGreaterThan(0);
  });
});

describe('English verbs table', () => {
  it('renders verb data with derived forms', () => {
    renderWithProviders(<EnglishVerbsDataTable />);
    expect(screen.getAllByText('Base').length).toBeGreaterThan(0);
    // pastParticipleForm is prefixed with "Had " at render time
    expect(screen.getAllByText(/^Had /).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^Have\/Has /).length).toBeGreaterThan(0);
  });
});

describe('English grammar page', () => {
  it('renders every tense section', () => {
    renderWithProviders(<EnglishGrammarDescriptions />);
    for (const title of [
      'Simple Present',
      'Present Continuous',
      'Present Perfect',
      'Simple Past',
      'Past Continuous',
      'Past Perfect',
      'Future Tense',
      'Future Perfect',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
  });

  it('preserves right-to-left Farsi content', () => {
    const { container } = renderWithProviders(<EnglishGrammarDescriptions />);
    const rtlCells = container.querySelectorAll('td[dir="rtl"]');
    expect(rtlCells.length).toBe(32);
    expect(rtlCells[0].textContent).toContain('او نامه می‌نویسد');
  });

  it('puts Farsi under the Farsi header, not the Norwegian one', () => {
    const { container } = renderWithProviders(<EnglishGrammarDescriptions />);
    // Headers are: Type | Example in English | Example in Norwegian | Example in Farsi
    // so the right-to-left cell must always be the 4th column.
    for (const row of container.querySelectorAll('tbody tr')) {
      const cells = [...row.querySelectorAll('td')];
      expect(cells).toHaveLength(4);
      expect(cells[3].getAttribute('dir')).toBe('rtl');
      expect(cells[2].getAttribute('dir')).toBeNull();
    }
  });
});

describe('Useful sentences page', () => {
  it('renders sentence pairs behind a disclosure', () => {
    renderWithProviders(<UsefulSentencesdescription />);
    expect(screen.getByText('Useful Sentences')).toBeInTheDocument();
    expect(screen.getByText('Talk about opinions')).toBeInTheDocument();
  });
});

describe('About page', () => {
  it('renders the feedback form controls', () => {
    renderWithProviders(<AboutPage />);
    expect(screen.getByText('About This App')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Submit Feedback' })
    ).toBeInTheDocument();
  });
});

describe('Navbar', () => {
  it('renders navigation entries and menu buttons', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getAllByText('Verbs Pool').length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole('button', { name: 'Norwegian Verbs' }).length
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole('button', { name: 'open settings' })
    ).toBeInTheDocument();
  });
});
