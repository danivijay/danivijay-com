import React, { Fragment } from "react";

const Container = ({ children }) => {
  return (
    <div className="container">
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default Container;
