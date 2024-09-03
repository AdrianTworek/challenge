import { render, screen } from '@testing-library/react';

import { UserListItem } from './user-list-item';

describe('UserListItem', () => {
  it('should render the user name', () => {
    render(<UserListItem name="John Doe" />);

    const nameElement = screen.getByText('John Doe');

    expect(nameElement).toBeInTheDocument();
  });
});
