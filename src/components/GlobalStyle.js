import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');
  body {
    margin: 0;
    font-family: 'League Spartan', Arial, sans-serif;
    background: #fff;
    overflow-x: hidden;
  }
`;

export default GlobalStyle; 