import React from "react";
import styled from "styled-components";

export const VerticalLetters = React.memo(
  () => {
    return (
      <LetterGrid>
        <li />
        {generateLetters()}
      </LetterGrid>
    );
  },
  () => true
);

const generateLetters = () => {
  const letterElements: JSX.Element[] = [];

  // Generate A-J by ASCII
  for (let letter = 65; letter < 75; letter++) {
    letterElements.push(<li key={letter}>{String.fromCharCode(letter)}</li>);
  }

  return letterElements.map((e) => e);
};

const LetterGrid = styled.ul`
  display: grid;
  grid-template-rows: 2.5rem repeat(10, 5.1rem);
  align-items: center;
`;
