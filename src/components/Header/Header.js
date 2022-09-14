import React from "react";
import "./styles.css";

const Header = ({title}) => {
  return (
    <div className="header">
      <h2 className="logo">{title}</h2>
    </div>
  );
};
export default Header;
