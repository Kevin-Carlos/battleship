import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { useRecoilState } from "recoil";
import { boardState, GameState } from "recoil_store";
import { Drop, Fire } from "phosphor-react";
import { colors } from "common/styles";

export const BoardBoxes = () => {
  const [gameState, setGameState] = useRecoilState(boardState);

  const immutablyEditGameState = (x: number, y: number) => {
    const position = gameState[x][y];
    const firedUponSpot: GameState = {
      ...position,
      p1: {
        firedUpon: {
          ...position.p1.firedUpon,
          hasFired: true,
          state: "miss",
        },
      },
    };

    const editedGameState = [
      ...gameState.slice(0, x),
      [
        ...gameState[x].slice(0, y),
        firedUponSpot,
        ...gameState[x].slice(y + 1),
      ],
      ...gameState.slice(x + 1),
    ];

    setGameState(editedGameState);
  };

  return <Wrapper>{generateBoxes(gameState, immutablyEditGameState)}</Wrapper>;
};

const generateBoxes = (
  gameState: GameState[][],
  setPlayerFiredUpon: (x: number, y: number) => void
) => {
  const BOXES = 10;

  const boxElements: JSX.Element[] = [];

  for (let x = 0; x < BOXES; x++) {
    for (let y = 0; y < BOXES; y++) {
      const coord = `${x},${y}`;
      const boxState = gameState[x][y];

      const disabled = boxState.p1.firedUpon.hasFired || boxState.p2.firedUpon.hasFired


      boxElements.push(
        <Water
          id={coord}
          key={coord}
          style={{ position: "relative" }}
          isDisabled={disabled}
          onClick={() => {
            if (disabled) {
              return;
            }

            setPlayerFiredUpon(x, y);
          }}
        >
          {gameState[x][y].p1.firedUpon.hasFired &&
          gameState[x][y].p1.firedUpon.state === "miss" ? (
            <Drop
              size={30}
              color={colors.light_teal}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ) : (
            <>
              {gameState[x][y].p1.firedUpon.state === "hit" ? (
                <Fire
                  size={30}
                  color={colors.orange}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ) : null}
            </>
          )}
        </Water>
      );
    }
  }

  return boxElements.map((b) => b);
};

const Wrapper = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(10, 5rem);
  grid-template-rows: repeat(10, 5rem);
  grid-gap: 0.1rem;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.light_teal};
  z-index: 10;

  & > div {
    background-color: ${({ theme }) => darken(0.08, theme.colors.dark_teal)};
    padding: 15px;
    text-align: center;
  }
`;

const Water = styled.div<{ isDisabled: boolean }>`
  cursor: ${({ isDisabled }) => isDisabled ? "not-allowed" : "crosshair"};
`;