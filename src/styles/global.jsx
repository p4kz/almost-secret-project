
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :root {
    --white: #e5e5e5;
    --black: #121214;

    --font-primary: #131316;
    --font-secundary: #e5e5e5;
    --bg: #b5b5b5;
  }

  body {
    background: var(--bg);
  }
`