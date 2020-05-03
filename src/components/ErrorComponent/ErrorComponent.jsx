import React from "react";
import "./ErrorComponent.css";

const ErrorComponent = ({ errorMessage }) => {
  return <div className="error">{errorMessage}</div>;
};

export default ErrorComponent;
