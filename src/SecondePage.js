import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

const SecondePage = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>okkk</h1>
      </>
    </ThemeProvider>
  );
};

export default SecondePage;
