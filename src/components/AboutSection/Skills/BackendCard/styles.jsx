import styled from "styled-components";

export const BackendCardBox = styled.div`
  border-radius: 1rem;
  border: 2px solid var(--border-white);
  box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.98);        
  color: var(--font-white);
  height: 287px;
  margin: 2rem auto 2rem auto;
  width: 250px;
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    font-family: var(--font-mono);
    margin-bottom: 1rem;
    text-shadow: rgba(255, 255, 255, 0.75) 0px 0px 15px;
    text-transform: uppercase;
  }

  h3 {
    border-top: 1px solid var(--gray);
    color: var(--gray);
    font-size: 1.5rem;
    margin: 1rem 0;
    padding-top: 1rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 940px) {
    margin: .5rem;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    height: auto;
    margin: 1rem;
  }

` 