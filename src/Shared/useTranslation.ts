import { useAppSelector } from '../Redux/hooks';
import { dictionaries, type TranslationKey } from '../Dictionary';

export function useTranslation() {
  const language = useAppSelector((state) => state.settings.language);
  const dictionary = dictionaries[language];
  return (key: TranslationKey): string => dictionary[key];
}
