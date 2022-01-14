import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Hero from "./components/seconde_page/HeroSection/Hero";
import Navbar from "./components/seconde_page/NavbarFile/Navbar";
import Sidebar from "./components/seconde_page/Sidebar/Sidebar";
import GlobalStyles from "./components/styles/Global";

const SecondePage = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar toggle={toggleSideBar} />
        <Sidebar isOpen={isOpen} toggle={toggleSideBar} />
        <Hero />
      </>
    </ThemeProvider>
  );
};

export default SecondePage;
