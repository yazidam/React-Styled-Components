import React, { useState } from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "../components/styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import CardInfo from "./CardInfo";
import Typical from "react-typical";
const Header = () => {
  const [show, setShow] = useState(false);

  const hundelSubmit = () => {
    setShow((prev) => !prev);
  };
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button onClick={hundelSubmit}>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>
              <Typical
                steps={[
                  "Build The Community Your Fans Will Love",
                  1000,
                  "Build Your First online Community!",
                  1000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
        {show ? <CardInfo setShow={setShow} /> : ""}
      </Container>
    </StyledHeader>
  );
};

export default Header;
