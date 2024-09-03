import { useDebounce, useSearchParamsState } from '@shared/hooks';
import { useFetchUsersQuery } from '@services/api/users';

import { UserListItem } from './user-list-item';

export const UserList = () => {
  const [searchQuery] = useSearchParamsState<string>('q', '');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { data, isPending, isError } = useFetchUsersQuery(
    debouncedSearchQuery.trim()
  );

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching users</p>;
  }

  if (!data.data.length) {
    return (
      <p>No users found for the following query: "{debouncedSearchQuery}"</p>
    );
  }

  const users = data?.data || [];

  return (
    <ul className="flex flex-col gap-3 mt-3 mx-2">
      {users.map((user) => (
        <li key={user.id} className="pb-3 border-b-2 last:border-b-0">
          <UserListItem name={user.name} />
        </li>
      ))}
    </ul>
  );
};
