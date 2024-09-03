import { api } from '@services/api/api';
import { Post } from '@models';

type FetchPostsParams = {
  searchQuery: string;
  page: number;
  limit: number;
};

export const fetchPosts = ({ searchQuery, page, limit }: FetchPostsParams) => {
  return api.get<Post[]>('/posts', {
    params: {
      q: searchQuery,
      _page: page,
      _limit: limit,
    },
  });
};
