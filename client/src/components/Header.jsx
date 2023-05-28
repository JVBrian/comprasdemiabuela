import React from "react";

import img from "../assets/img.svg";
const Header = () => {
  return (
    <header>
      <img src={img} alt="img" />
      <h1>Compras de mi abuela</h1>
    </header>
  );
};

export default Header;
