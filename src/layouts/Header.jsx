import React from "react";

const Header = ({ title, desc }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{desc}</p>
    </header>
  );
};

export default Header;
