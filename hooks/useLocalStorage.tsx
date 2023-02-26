import { useState, useEffect } from 'react';

const getSavedValue = (key: string, initialValue?: string[]) => {
  const savedValue = JSON.parse(localStorage.getItems(key as string));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export const useLocalStorage = (key: string, initialValue?: string[]) => {
  const [storage, setStorage] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    if (storage) {
      try {
        localStorage.setItem(key, JSON.stringify(storage));
      } catch (err) {
        throw new Error('Oops, something is wrong in localStorage');
      }
    }
  }, [storage, key]);

  return [storage, setStorage];
};
