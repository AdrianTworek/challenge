import { useSearchParamsState } from '@shared/hooks';

import { TextInput } from '@shared/ui';

export const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useSearchParamsState<string>('q', '');

  return (
    <form
      className="bg-blue-300 p-4"
      onSubmit={(e) => e.preventDefault()}
      role="search"
      aria-label="Site Search"
    >
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <TextInput
        id="search-input"
        type="text"
        placeholder="Search..."
        aria-label="Search for users or posts"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search text-gray-400 absolute left-2 pointer-events-none"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        }
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};
