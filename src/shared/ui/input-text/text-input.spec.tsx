import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput } from './text-input';

describe('TextInput', () => {
  it('should render the input field', () => {
    render(<TextInput placeholder="Search..." />);

    const input = screen.getByPlaceholderText('Search...');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render with an icon when the icon prop is passed', () => {
    const icon = <span>🔍</span>;

    render(<TextInput icon={icon} placeholder="Search..." />);

    const input = screen.getByPlaceholderText('Search...');
    const iconElement = screen.getByText('🔍');

    expect(input).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('should accept and apply additional props to the input element', () => {
    render(<TextInput aria-label="custom-label" placeholder="Type here" />);

    const input = screen.getByPlaceholderText('Type here');

    expect(input).toHaveAttribute('aria-label', 'custom-label');
  });

  it('should render with a specified value', () => {
    render(<TextInput value="Hello" onChange={() => {}} />);

    const input = screen.getByDisplayValue('Hello');

    expect(input).toBeInTheDocument();
  });

  it('should call onChange handler when typing and change displayed value', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<TextInput onChange={handleChange} placeholder="Type here" />);

    const input = screen.getByPlaceholderText('Type here');

    await user.type(input, 'Hello');

    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('Hello');
  });

  it('should be disabled when the disabled prop is passed', () => {
    render(<TextInput disabled placeholder="Type here" />);

    const input = screen.getByPlaceholderText('Type here');

    expect(input).toBeDisabled();
  });
});
