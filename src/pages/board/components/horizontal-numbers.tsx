import React from "react";
import styled from "styled-components";

export const HorizontalNumbers = React.memo(
  () => {
    return <NumberGrid>{generateNumbers()}</NumberGrid>;
  },
  () => true
);

const generateNumbers = () => {
  const numberElements: JSX.Element[] = [];

  // Generate A-J by ASCII
  for (let number = 1; number <= 10; number++) {
    numberElements.push(<li key={number}>{number}</li>);
  }

  return numberElements.map((n) => n);
};

const NumberGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 5.1rem);
  justify-items: center;
`;
