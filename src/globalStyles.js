import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    height: 100%;
    overflow-x: hidden;
    background-color: #F5F3F4;
    color: #3D4044;
  }
`;
