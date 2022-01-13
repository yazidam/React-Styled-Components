import React, { useEffect } from "react";

import styled from "styled-components";
import { Button } from "./styles/Button.styled";

const CardInfo = ({ setShow, show }) => {
  const hideModal = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, [hideModal]);
  return (
    <StyledModal>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>Ahmed Yazid Mejri 🔥🔥</h3>
        <Button onClick={() => setShow((prev) => !prev)}>Close</Button>
      </div>
    </StyledModal>
  );
};

export default CardInfo;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // to fix modal when he display on card

  .modal-box {
    width: 390px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.header};
  }
  h3 {
    font-size: 1.5rem;
    text-align: center;
  }
`;
