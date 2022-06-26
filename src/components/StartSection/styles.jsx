import styled from "styled-components";

import startBackground from "../../assets/img/start-background.png"

export const StartBox = styled.section`
  height: 100vh;
  background-color: #222;
  display: flex;
  background: url( ${ startBackground } ) center no-repeat;
  background-size: cover;

  padding-left: 1.8rem;
  padding-right: 1.8rem;
`

export const StartWrap = styled.div`
  width: 1180px;
  min-width: 285px;
  height: 500px;
  margin: auto;

  .start__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    h2 {
      font-family: var(--font-mono);
      font-size: 3.6rem;
    }
  }

  @media screen and (max-width: 768px) {
    
    .start__info {
      h2 {
        font-size: 2.3rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }
`