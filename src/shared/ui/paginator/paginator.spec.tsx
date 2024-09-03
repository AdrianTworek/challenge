import { render, screen } from '@testing-library/react';

import { Paginator } from './paginator';
import userEvent from '@testing-library/user-event';

describe('Paginator', () => {
  const mockHandlePrevClick = vi.fn();
  const mockHandleNextClick = vi.fn();

  it('should render both Previous and Next buttons', () => {
    render(
      <Paginator
        page={2}
        handlePrevClick={mockHandlePrevClick}
        handleNextClick={mockHandleNextClick}
        totalPages={10}
      />
    );

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('should call handlePrevClick when clicking on the Previous button', async () => {
    const user = userEvent.setup();
    render(
      <Paginator
        page={2}
        handlePrevClick={mockHandlePrevClick}
        handleNextClick={mockHandleNextClick}
        totalPages={10}
      />
    );

    const prevButton = screen.getByText('Previous');
    await user.click(prevButton);

    expect(mockHandlePrevClick).toHaveBeenCalledTimes(1);
  });

  it('should call handleNextClick when clicking on the Next button', async () => {
    const user = userEvent.setup();
    render(
      <Paginator
        page={2}
        handlePrevClick={mockHandlePrevClick}
        handleNextClick={mockHandleNextClick}
        totalPages={10}
      />
    );

    const nextButton = screen.getByText('Next');
    await user.click(nextButton);

    expect(mockHandleNextClick).toHaveBeenCalledTimes(1);
  });

  it('should disable the Previous button when the current page is 1', () => {
    render(
      <Paginator
        page={1}
        handlePrevClick={mockHandlePrevClick}
        handleNextClick={mockHandleNextClick}
        totalPages={10}
      />
    );

    const prevButton = screen.getByText('Previous');

    expect(prevButton).toBeDisabled();
  });

  it('should disable the Next button when the current page is the last page', () => {
    render(
      <Paginator
        page={10}
        handlePrevClick={mockHandlePrevClick}
        handleNextClick={mockHandleNextClick}
        totalPages={10}
      />
    );

    const nextButton = screen.getByText('Next');

    expect(nextButton).toBeDisabled();
  });

  it('should not disable any buttons when not on the first or last page', () => {
    render(
      <Paginator
        page={5}
        handlePrevClick={mockHandlePrevClick}
        handleNextClick={mockHandleNextClick}
        totalPages={10}
      />
    );

    const prevButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
});
