/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const ReserveButton = ({ onClick }) => {
  console.log("In RESERVE button!");
  return <Button className="btn-secondary" onClick={onClick}>¡Reservar!</Button>;
};

export default memo(ReserveButton);

ReserveButton.propTypes = {
  onClick: PropTypes.func,
};
