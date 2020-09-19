import React from "react";
import "./styles.scss";

const Backdrop = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick} />;
};

export default Backdrop;
