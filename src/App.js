import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
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
      </>
    </ThemeProvider>
  );
}

export default App;
