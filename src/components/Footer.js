import React from "react";
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  const handleScroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="logo_footer" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <UpIcon>
          <a onClick={handleScroll}>
            <FaArrowCircleUp />
          </a>
        </UpIcon>
        <p>&copy; 2022 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

export const UpIcon = styled.div`
  display: flex;

  flex-direction: row-reverse;

  a {
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    margin-top: 20px;
  }
`;
