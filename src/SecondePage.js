import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/seconde_page/FooterSection/Footer";
import Hero from "./components/seconde_page/HeroSection/Hero";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "./components/seconde_page/InfoSection/data";
import Info from "./components/seconde_page/InfoSection/Info";
import Navbar from "./components/seconde_page/NavbarFile/Navbar";
import Service from "./components/seconde_page/ServicesSection/Service";
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
        <Info {...homeObjOne} />
        <Info {...homeObjTwo} />
        <Service />
        <Info {...homeObjThree} />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default SecondePage;
