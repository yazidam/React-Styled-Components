import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          <h1>hello world from ahmed</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
