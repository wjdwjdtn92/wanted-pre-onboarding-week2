import { useState, useEffect } from 'react';

function useDebounce<T>(initValue: T, delay: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(initValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(initValue);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [initValue, delay]);

  return debounceValue;
}

export default useDebounce;
