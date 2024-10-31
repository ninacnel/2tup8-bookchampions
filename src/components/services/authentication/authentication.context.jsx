import { useState, createContext } from "react";
import PropType from "prop-types";


export const AuthenticationContext = createContext();


const userValue = JSON.parse(localStorage.getItem("user"));


export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(userValue);

  const handleEmailLogin = (email) => {
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
  };


  const handleEmailLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider value={{user, handleEmailLogin, handleEmailLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};


AuthenticationContextProvider.propTypes = {
  children: PropType.object,
};
