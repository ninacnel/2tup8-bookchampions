/* eslint-disable react/display-name */

import PropTypes from "prop-types";
import { memo } from "react";

const Greeting = ({name}) => {
    console.log("In GREETING COMPONENT")
  return (
    <h2 className="border bg-info">Hola {name}, bienvenido a la seccion de comentarios.</h2>
  )
};

export default memo(Greeting);

Greeting.propTypes = {
    name: PropTypes.string,
}
