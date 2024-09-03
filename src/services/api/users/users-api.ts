import { api } from '@services/api/api';
import { User } from '@models';

export const fetchUsers = (searchQuery = '') => {
  return api.get<User[]>('/users', {
    params: {
      // More robust result with the following query param
      // q: searchQuery,
      name_like: searchQuery,
    },
  });
};
