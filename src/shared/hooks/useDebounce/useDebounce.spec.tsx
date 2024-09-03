import { act, renderHook } from '@testing-library/react';

import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('test', 500));

    expect(result.current).toBe('test');
  });

  it('should update the debounced value after the specified delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'test', delay: 500 },
      }
    );

    expect(result.current).toBe('test');

    rerender({ value: 'updated', delay: 500 });

    expect(result.current).toBe('test');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });

  it('should reset the debounce timer when the value changes before the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'test', delay: 500 },
      }
    );

    expect(result.current).toBe('test');

    rerender({ value: 'updated', delay: 500 });

    expect(result.current).toBe('test');

    act(() => {
      vi.advanceTimersByTime(250);
    });

    rerender({ value: 'updated again', delay: 500 });

    expect(result.current).toBe('test');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated again');
  });

  it('should not update the debounced value if the component unmounts before the delay', () => {
    const { result, unmount } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'test', delay: 500 },
      }
    );

    expect(result.current).toBe('test');

    unmount();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('test');
  });
});
