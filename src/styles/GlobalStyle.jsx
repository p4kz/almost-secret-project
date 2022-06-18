import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  :root {
    --black: #121214;
    --white: #e5e5e5;
    
    --black-alpha: #00000044;

    --font-black: #121214;
    --font-white: #e5e5e5;
    
    --font-times: 'Times New Roman', Times, serif, monospace;
    --font-mono: 'DM Mono', monospace;
    font-size: 62.5%;
  };
  
  body {
    font-size: 1.6rem;
    font-family: var(--font-times);
    line-height: 1.5;
    background: var(--white);
    
    background: url(https://i.imgur.com/A5dt0Ou.jpg);
    background-image: linear-gradient();
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  a:hover, button:hover {
    cursor: pointer;
  }
  
`

export const Container = styled.div`
  padding-left: 6%;
  padding-right: 6%;
`

