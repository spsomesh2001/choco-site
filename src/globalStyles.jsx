import styled, { createGlobalStyle } from "styled-components";

export const GlobalContainer = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
  }
`;

export const Button = styled.button`
  color: #000;
  font-size: 1.03rem;
  padding: 8px 20px;
  border: none;
  outline: none;
  border-radius: 25px;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    /* color: #fff; */
    background: #a9a9a9;
    transition: all 0.2s ease-out;
  }
`;
