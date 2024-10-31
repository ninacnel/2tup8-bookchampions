import { useState } from "react";
import { createContext } from "react";
import PropType from "prop-types";

export const TranslateContext = createContext(null);

const tValue = localStorage.getItem("translation");

export const TranslateContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(tValue ?? "es");


    const changeLanguageHandler = (newLanguage) => {
        localStorage.setItem("translation", newLanguage);
        setLanguage(newLanguage);
    };


    return (
        <TranslateContext.Provider value={{ language, changeLanguageHandler }}>
            {children}
        </TranslateContext.Provider>
    );
};


TranslateContextProvider.propTypes = {
    children: PropType.object,
};
