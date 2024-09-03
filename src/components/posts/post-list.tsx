import { useState, useEffect } from 'react';

import { useDebounce, useSearchParamsState } from '@shared/hooks';
import { useFetchPostsQuery } from '@services/api/posts';

import { PostListItem } from './post-list-item';
import { Paginator } from '@shared/ui';

const LIMIT_POSTS_PER_PAGE = 10;

export const PostList = () => {
  const [page, setPage] = useState(1);
  const [searchQuery] = useSearchParamsState('q', '');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { data, isPending, isError } = useFetchPostsQuery({
    searchQuery: debouncedSearchQuery.trim(),
    page,
    limit: LIMIT_POSTS_PER_PAGE,
  });

  // Reset page to 1 whenever the search query changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearchQuery]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching posts</p>;
  }

  if (!data.data.length) {
    return (
      <p>No posts found for the following query: "{debouncedSearchQuery}"</p>
    );
  }

  const posts = data?.data || [];
  const totalPosts = data?.meta.total || 0;
  const totalPages = Math.ceil(totalPosts / LIMIT_POSTS_PER_PAGE);

  return (
    <>
      <ul className="flex flex-col gap-3 mt-3 mx-2">
        {posts.map((post) => (
          <li key={post.id} className="pb-3 border-b-2 last:border-b-0">
            <PostListItem id={post.id} title={post.title} />
          </li>
        ))}
      </ul>

      <div className="text-lg font-bold mt-3">
        <p>Posts count: {totalPosts}</p>
        <p>
          Page: {page} of {totalPages}
        </p>
      </div>

      {totalPages > 1 && (
        <Paginator
          page={page}
          handlePrevClick={() => setPage((currPage) => currPage - 1)}
          handleNextClick={() => setPage((currPage) => currPage + 1)}
          totalPages={totalPages}
        />
      )}
    </>
  );
};
