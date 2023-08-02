import React from "react";
import Figure from "./Figure";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  padding: 2rem;
  border-radius: 12px;

  h2 {
    font-size: 2.5em;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 1.5rem 0;

    &::first-line {
      font-size: 1.5em;
    }
  }
`;

export default function Card({ title, text, imageURL, date }) {
  return (
    <StyledCard className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure imageURL={imageURL} caption={date} />
    </StyledCard>
  );
}
