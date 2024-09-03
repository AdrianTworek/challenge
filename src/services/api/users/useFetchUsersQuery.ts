import { useQuery } from '@tanstack/react-query';

import { fetchUsers } from './users-api';

export const useFetchUsersQuery = (searchQuery = '') => {
  return useQuery({
    queryKey: ['users', searchQuery],
    queryFn: () => fetchUsers(searchQuery),
  });
};
