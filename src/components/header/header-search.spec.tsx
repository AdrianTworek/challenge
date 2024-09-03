import { render, screen } from '@testing-library/react';
import { Mock } from 'vitest';

import { useSearchParamsState } from '@shared/hooks';

import { HeaderSearch } from './header-search';
import userEvent from '@testing-library/user-event';

vi.mock('@shared/hooks', () => ({
  useSearchParamsState: vi.fn(),
}));

describe('HeaderSearch', () => {
  const setSearchQueryMock = vi.fn();

  beforeEach(() => {
    (useSearchParamsState as Mock).mockReturnValue(['', setSearchQueryMock]);
  });

  it('should render the header search component with correct elements', () => {
    render(<HeaderSearch />);

    expect(screen.getByRole('search')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should call setSearchQuery when the input changes', async () => {
    const user = userEvent.setup();
    render(<HeaderSearch />);

    const input = screen.getByPlaceholderText('Search...');
    const text = 'test';
    await user.type(input, text);

    expect(setSearchQueryMock).toHaveBeenCalledTimes(text.length);
  });
});
