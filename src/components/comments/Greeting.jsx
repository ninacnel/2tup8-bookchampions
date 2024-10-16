/* eslint-disable react/display-name */

import PropTypes from "prop-types";
import { memo } from "react";

const Greeting = memo(() => {
    console.log("In GREETING COMPONENT")
  return (
    <h2 className="border bg-info">Hola, bienvenido a la seccion de comentarios.</h2>
  )
}, null);

export default Greeting;

Greeting.propTypes = {
    name: PropTypes.string,
}
