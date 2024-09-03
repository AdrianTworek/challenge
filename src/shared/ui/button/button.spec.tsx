import { screen, render } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('should render button with the correct text', () => {
    render(<Button>Click me!</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me!');
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me!</Button>);

    const button = screen.getByRole('button');
    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when the disabled prop is passed', () => {
    render(<Button disabled>Click me!</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should render with the correct type attribute', () => {
    render(<Button>Click me!</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should allow changing the type attribute', () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('should pass additional props to the button element', () => {
    render(<Button aria-label="custom-label">Click me!</Button>);

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'custom-label'
    );
  });
});
