import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  :root {
    --black: #121214;
    --white: #e6e6e6;
    --blue: #0066cc;
    --green:#04d361;
    
    --gray: #67605b;
    --gray-white: #979797;

    --black-alpha: #00000044;

    --font-black: #121214;
    --font-white: #e5e5e5;

    --border-black: #121214;
    --border-white: #fff;
    
    --font-times: 'Times New Roman', Times, serif, monospace;
    --font-mono: 'DM Mono', monospace;
    font-size: 62.5%;
  };
  
  body {
    font-size: 1.6rem;
    font-family: var(--font-times);
    line-height: 1.5;
    background: var(--white);
    
    /* background: url(https://wallpapercave.com/wp/wp6942344.jpg); */
    background-image: linear-gradient();
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  a, button {
    transition: all .5s ease;
  }

  a:hover, button:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }

  a:active, button:active {
    background: var(--green);
    color: var(--font-black);
    border: 1px solid var(--border-black);
    border-radius: .8rem;
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }
`

export const Container = styled.div`
  padding-left: 1.8rem;
  padding-right: 1.8rem;
`

