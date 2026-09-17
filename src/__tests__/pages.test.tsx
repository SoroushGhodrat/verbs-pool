import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, setViewport } from '../test-utils';
import NorwegianVerbsDataTable from '../components/NorwegianVerbsDataTable';
import EnglishVerbsDataTable from '../components/EnglishVerbsDataTable';
import EnglishGrammarDescriptions from '../components/EnglishGrammarDescriptions';
import UsefulSentencesdescription from '../components/UsefulSentencesdescription';
import AboutPage from '../pages/AboutPage';
import Navbar from '../components/common/Navbar';

beforeEach(() => setViewport(true));

describe('Norwegian verbs table', () => {
  it('renders only the first letter group by default', () => {
    renderWithProviders(<NorwegianVerbsDataTable />);
    // Group A is shown; a verb from a later group is not in the DOM at all.
    expect(screen.getByText('å adlyde')).toBeInTheDocument();
    expect(screen.queryByText('å bedøve')).not.toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('switches groups when a letter is chosen', async () => {
    const user = userEvent.setup();
    renderWithProviders(<NorwegianVerbsDataTable />);

    await user.click(screen.getByRole('button', { name: 'B' }));

    expect(screen.getByText('å bedøve')).toBeInTheDocument();
    expect(screen.queryByText('å adlyde')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'B' })).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('shows an empty state for a letter with no verbs', async () => {
    const user = userEvent.setup();
    renderWithProviders(<NorwegianVerbsDataTable />);

    await user.click(screen.getByRole('button', { name: 'C' }));

    expect(screen.getByText('table.emptyGroup')).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('renders the Norwegian column headers', () => {
    renderWithProviders(<NorwegianVerbsDataTable />);
    expect(screen.getByText('Infinitiv')).toBeInTheDocument();
    expect(screen.getByText('Preteritum')).toBeInTheDocument();
  });

  it('renders cards instead of a table on narrow screens', () => {
    setViewport(false);
    renderWithProviders(<NorwegianVerbsDataTable />);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.getByText('å adlyde')).toBeInTheDocument();
    // Detail labels come through as a description list on mobile.
    expect(screen.getAllByText('Presens').length).toBeGreaterThan(0);
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

describe('English verbs table regressions', () => {
  it('does not double the auxiliary in the present perfect column', () => {
    renderWithProviders(<EnglishVerbsDataTable />);
    // presentPerfectForm used to hold "has abashed", which the "Have/Has "
    // prefix then doubled into "Have/Has has abashed".
    expect(screen.queryByText(/Have\/Has has /)).not.toBeInTheDocument();
    expect(screen.queryByText(/Had had /)).not.toBeInTheDocument();
  });

  it('offers a letter button for every group', () => {
    renderWithProviders(<EnglishVerbsDataTable />);
    for (const letter of ['A', 'B', 'Z']) {
      expect(screen.getByRole('button', { name: letter })).toBeInTheDocument();
    }
    // X has no English verbs and so must not be offered at all.
    expect(screen.queryByRole('button', { name: 'X' })).not.toBeInTheDocument();
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
