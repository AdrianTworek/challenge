import { act, renderHook } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';
import { Mock, vi } from 'vitest';
import { useSearchParamsState } from './useSearchParamsState';

vi.mock('react-router-dom', () => ({
  useSearchParams: vi.fn(),
}));

describe('useSearchParamsState', () => {
  const mockSetSearchParams = vi.fn();
  const defaultSearchParamValue = 'test';

  beforeEach(() => {
    (useSearchParams as Mock).mockReturnValue([
      new URLSearchParams(`?q=${defaultSearchParamValue}`),
      mockSetSearchParams,
    ]);
  });

  it('should return the default value if the search param is not set', () => {
    (useSearchParams as Mock).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);

    const { result } = renderHook(() =>
      useSearchParamsState<string>('q', 'default')
    );

    expect(result.current[0]).toBe('default');
  });

  it('should return the search param value when set', () => {
    const { result } = renderHook(() =>
      useSearchParamsState<string>('q', 'other')
    );

    expect(result.current[0]).toBe(defaultSearchParamValue);
  });

  it('should update the search params when setSearchParamsState is called', () => {
    const { result } = renderHook(() =>
      useSearchParamsState<string>('q', 'other')
    );

    act(() => {
      result.current[1]('new');
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith(
      new URLSearchParams('q=new')
    );
  });

  it('should handle multiple updates correctly', () => {
    const { result } = renderHook(() =>
      useSearchParamsState<string>('q', 'other')
    );

    act(() => {
      result.current[1]('new');
    });

    act(() => {
      result.current[1]('newer');
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith(
      new URLSearchParams('q=newer')
    );
  });
});
