import { useQuery } from '@tanstack/react-query';

import { fetchPosts } from './posts-api';

export const useFetchPostsQuery = ({
  searchQuery = '',
  page = 1,
  limit = 10,
}) => {
  return useQuery({
    queryKey: ['posts', searchQuery, page, limit],
    queryFn: async () => {
      const response = await fetchPosts({ searchQuery, page, limit });

      return {
        data: response.data,
        meta: {
          total: response.headers['x-total-count'],
        },
      };
    },
  });
};
