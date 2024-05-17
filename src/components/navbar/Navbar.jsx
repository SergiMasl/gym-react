import React, { useState, useEffect } from "react";
import "../../styles/_header.sass";
import Logo from "../../styles/svg/logo.svg";
import Header from "./Header";
import Burger from "./Burger";
import SmallNav from "./SmallNav";
import navList from "../../asses/navList.json";

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isBurgerOn, setIsBurgerOn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 900);
    };
    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`container ${isSmallScreen ? "burger-active" : ""}`}>
      {isSmallScreen ? (
        <Header Logo={Logo} navList={navList} />
      ) : (
        <>
          <SmallNav isBurgerOn={isBurgerOn} />
          <Burger setIsBurgerOn={setIsBurgerOn} isBurgerOn={isBurgerOn} />
        </>
      )}
    </div>
  );
}
