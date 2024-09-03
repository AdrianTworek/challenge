import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { NavTabs } from './nav-tabs';

describe('NavTabs', () => {
  beforeEach(() => {
    render(
      <Router>
        <NavTabs />
      </Router>
    );
  });

  it('should render the Users and Posts tabs', () => {
    const usersTab = screen.getByText('Users');
    const postsTab = screen.getByText('Posts');

    expect(usersTab).toBeInTheDocument();
    expect(postsTab).toBeInTheDocument();
  });

  it('should apply active class to active tab', () => {
    const usersTab = screen.getByText('Users');
    const postsTab = screen.getByText('Posts');

    expect(usersTab).not.toHaveClass('bg-blue-500');
    expect(postsTab).not.toHaveClass('bg-blue-500');
  });
});
