import { useContext } from "react";
import { TranslateContext } from "../services/authentication/translation.context";
import { dictionary_translations } from "../../utils/translation.dictionary";

const useTranslation = () => {
  const { language } = useContext(TranslateContext);

  return (key) => {
    const translation = dictionary_translations[language]
      ? dictionary_translations[language].find((t) => t.key === key)?.value
      : dictionary_translations["es"].find((t) => t.key === key)?.value;

    return translation || key;
  };
};


export default useTranslation;