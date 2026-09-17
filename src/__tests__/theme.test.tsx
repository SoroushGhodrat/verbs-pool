import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, setViewport } from '../test-utils';
import Navbar from '../components/common/Navbar';

beforeEach(() => {
  setViewport(true);
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

describe('theme toggle', () => {
  it('switches the document theme and persists the choice', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navbar />);

    await user.click(
      screen.getByRole('button', { name: 'Switch to dark mode' })
    );

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    await user.click(
      screen.getByRole('button', { name: 'Switch to light mode' })
    );

    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
