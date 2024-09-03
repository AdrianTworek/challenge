import { QueryCache, QueryClient } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 10_000;

export const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: DEFAULT_STALE_TIME,
    },
  },
});
