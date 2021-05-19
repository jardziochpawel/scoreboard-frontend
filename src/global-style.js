import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Audiowide', cursive;
    
    display: flex;
    align-items: flex-end;
    justify-content: center;
}`;