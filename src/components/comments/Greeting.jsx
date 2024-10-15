/* eslint-disable react/display-name */
import { memo } from "react";


import PropTypes from "prop-types";

const Greeting = memo(({name}) => {
    console.log("In Greeting")
  return (
    <h2 className="border bg-info">Hola {name}, bienvenido</h2>
  )
},null)

export default Greeting;

Greeting.propTypes = {
    name: PropTypes.string,
}
