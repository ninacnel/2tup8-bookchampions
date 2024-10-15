/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import PropTypes from "prop-types";


const ReserveButton = ({ onClick }) => {
  console.log("In RESERVE button!");
  return <button onClick={onClick}>¡Reservar!</button>;
};


export default memo(ReserveButton);


ReserveButton.propTypes = {
  onClick: PropTypes.func,
};
