import React from "react";
import { StyledCard } from "./styles/Card.styled";

const Card = ({ item }) => {
  return (
    <StyledCard
      position={item.position}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
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
