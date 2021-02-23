import { atom } from "recoil";

export const boardState = atom({
  key: "boardState",
  default: initializeGameDefaults(),
});

type HitOrMiss = "hit" | "miss" | null;

export interface GameState {
  p1: {
    firedUpon: {
      hasFired: boolean;
      state: HitOrMiss;
    };
  };
  p2: {
    firedUpon: {
      hasFired: boolean;
      state: HitOrMiss;
    };
  };
}

// function for hoisting
function initializeGameDefaults() {
  const BOARD_SIZE = 10;

  const playerStateObject = {
    p1: {
      firedUpon: {
        hasFired: false,
        state: null,
      },
    },
    p2: {
      firedUpon: {
        hasFired: false,
        state: null,
      },
    },
  };

  // Create a 2D array that holds the game state
  const gameState: GameState[][] = [];

  for (let index = 0; index < BOARD_SIZE; index++) {
    gameState[index] = [];

    for (let inner = 0; inner < BOARD_SIZE; inner++) {
      gameState[index][inner] = playerStateObject;
    }
  }

  return gameState;
}
