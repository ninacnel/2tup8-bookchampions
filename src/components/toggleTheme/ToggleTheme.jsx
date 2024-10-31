import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../services/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} className="my-0">
      Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
    </Button>
  );
};




export default ToggleTheme;
