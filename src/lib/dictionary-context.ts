import { createContext } from 'react';

export const DictionaryContext = createContext<
  Record<string, string> | undefined | null
>(null);
