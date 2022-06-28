import styled from "styled-components";

export const FooterBox = styled.footer`
  align-items: center;
  color: var(--font-white);
  display: flex;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.6rem;
  flex-direction: row;
  height: 3rem;
  height: 100px;
  min-width: 100%;
  justify-content: center;
  transition: 500ms;

  .footer__link {
    color: var(--font-white);
    margin-left: .5rem;
    text-decoration: none;
  }

  .footer__link:hover {
    color: var(--green);
  }
`