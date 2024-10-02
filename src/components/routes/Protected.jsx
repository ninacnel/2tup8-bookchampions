import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthenticationContext } from "../services/authentication/authentication.context";


const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

Protected.propTypes = {
    children: PropTypes.object,
  };
  
  
  export default Protected;
  