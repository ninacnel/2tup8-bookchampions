import { useContext } from "react";
import { Form } from "react-bootstrap";
import { TranslateContext } from "../services/authentication/translation.context";
import useTranslation from "../hooks/useTranslation";


const ComboLanguage = () => {
  const { language, changeLanguageHandler } = useContext(TranslateContext);


  const translate = useTranslation();


  const changeLanguage = (event) => {
    changeLanguageHandler(event.target.value);
  };


  return (
    <Form.Select
      onChange={changeLanguage}
      value={language}
      aria-label="Select Language"
      className="w-50 mb-4"
    >
      <option value="es">{translate("spanish_lang")}</option>
      <option value="en">{translate("english_lang")}</option>
    </Form.Select>
  );
};


export default ComboLanguage;
