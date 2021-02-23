import React from "react";
import type { FC } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "common/styles";

export const BattleShipStyles = createGlobalStyle`
  html {
    height: 100vh;
    width: 100vw;
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    width: 100vw;
    font-size: 2rem;
    margin: 0;
  }

  #root {
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.black};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Layout: FC = ({ children }) => {
  return (
    // Wrap theme here because seems to not work in gatsby-* files, theres a flash
    <ThemeProvider theme={theme}>
      <BattleShipStyles />
      <Board>{children}</Board>
    </ThemeProvider>
  );
};

const Board = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;

  /* Skewed transparent div  */
  &::after {
    content: "";
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100%;
    bottom: -62rem;
    transform: skewY(-12deg);
    pointer-events: none;
    z-index: 1;
  }
`;
