/* eslint-disable react/display-name */

import PropTypes from "prop-types";

const Greeting = () => {
    console.log("In GREETING COMPONENT")
  return (
    <h2 className="border bg-info">Hola, bienvenido a la seccion de comentarios.</h2>
  )
};

export default Greeting;

Greeting.propTypes = {
    name: PropTypes.string,
}
