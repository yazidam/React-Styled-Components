import React from "react";
import { StyledCard } from "./styles/Card.styled";

const Card = ({ item }) => {
  return (
    <StyledCard>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <div>
        <img src={`./images/${item.image}`} alt="image" />
      </div>
    </StyledCard>
  );
};

export default Card;
