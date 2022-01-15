import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import FirstPage from "./FirstPage";
import SecondePage from "./SecondePage";
import GlobalStyles from "./components/styles/Global";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
    LargeScreen: "1280px",
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <GlobalStyles /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage theme={theme} />} />
          <Route path="/seconde" element={<SecondePage theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
