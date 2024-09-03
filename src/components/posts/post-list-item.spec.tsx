import { render, screen } from '@testing-library/react';
import { PostListItem } from './post-list-item';

describe('PostListItem', () => {
  it('should render the post id and title', () => {
    render(<PostListItem id={1} title="Test Post Title" />);

    const postElement = screen.getByText('1. Test Post Title');

    expect(postElement).toBeInTheDocument();
  });
});
