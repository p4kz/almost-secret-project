import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;1,400;1,500&display=swap');
    
    --white: #e5e5e5;
    --black: #121214;
    --blue: #4b59f7;
    --roxo: #8257e5;
    
    --font-primary: #131316;
    --font-secundary: #e5e5e5;
    --bg: #b5b5b5;

    --times: 'Times New Roman', 'DM Mono', monospace; 
    --mono: 'DM Mono', 'Times New Roman', monospace; 

    font-family: 'Times New Roman', 'DM Mono', monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }
  

  body {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: var(--bg);
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`