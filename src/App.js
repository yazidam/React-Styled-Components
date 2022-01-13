import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import FirstPage from "./FirstPage";
import SecondePage from "./SecondePage";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage theme={theme} />} />
        <Route path="/seconde" element={<SecondePage theme={theme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
