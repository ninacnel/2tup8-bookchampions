import { useState, createContext, useEffect } from "react";
import PropType from "prop-types";


export const ThemeContext = createContext();


const themeValue = JSON.parse(localStorage.getItem("user"));


export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeValue);

 useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", themeValue);
  }, []);


  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


ThemeContextProvider.propTypes = {
  children: PropType.object,
};
