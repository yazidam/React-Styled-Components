import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

const FirstPage = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default FirstPage;
