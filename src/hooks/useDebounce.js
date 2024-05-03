import {useEffect, useState} from 'react';

export const useDebounce = (query, delay) => {
  const [debounceValue, setDebounceValue] = useState(query);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceValue(query);
    }, delay);

    return () => clearTimeout(timeOut);
  }, [query, delay]);

  return debounceValue;
};
