import { useContext } from 'react';
import { DictionaryContext } from '../lib/dictionary-context';

const useTranslation = () => {
  const translations = useContext(DictionaryContext);
  const t = (
    key: string,
    variables?: {
      [key: string]: string | number;
    }
  ) => {
    if (!translations) {
      return key;
    }
    if (variables) {
      return Object.keys(variables).reduce((acc, variableKey) => {
        return acc.replace(
          new RegExp(`{{${variableKey}}}`, 'g'),
          variables[variableKey].toString()
        );
      }, translations[key] || key);
    }
    return translations[key] || key;
  };
  return t;
};

export default useTranslation;
