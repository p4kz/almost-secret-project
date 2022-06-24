import styled from "styled-components";

export const FooterBox = styled.footer`
  align-items: center;
  color: var(--black);
  display: flex;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.6rem;
  flex-direction: row;
  height: 3rem;
  height: 100px;
  min-width: 100%;
  justify-content: center;

  .footer__link {
    color: var(--black);
    margin-left: .5rem;
    text-decoration: none;
    transition: 500ms;
  }

  .footer__link:hover {
    color: var(--green);
    text-decoration: underline;
  }
`