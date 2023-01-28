import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderCenter from "./HeaderCenter";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="">
      <HeaderTop></HeaderTop>
      <HeaderCenter></HeaderCenter>
      <HeaderBottom></HeaderBottom>
    </header>
  );
};

export default Header;
