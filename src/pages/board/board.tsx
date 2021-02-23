import React from "react";
import styled from "styled-components";
import { HorizontalNumbers, VerticalLetters, BoardBoxes } from "./components";

export const BoardShell = () => {
  return (
    <Shell>
      <LetterGrid>
        <VerticalLetters />
      </LetterGrid>
      <NumbersAndBoardWrapper>
        <HorizontalNumbers />
        <BoardBoxes />
      </NumbersAndBoardWrapper>
    </Shell>
  );
};

const Shell = styled.div`
  display: flex;
  padding: 4rem;
`;

const LetterGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const NumbersAndBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
`;
