import styled from "styled-components";

export const ContactBox = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  margin-top: 3rem;

  .contact__title {
    color: var(--font-white);
    border-bottom: 2px solid var(--border-white);
    font-weight: bolder;
    max-width: 1180px;
    width: 100%;
    padding-bottom: .5rem;
    text-transform: uppercase;
    margin: 1rem 0 1rem 0;
  }

  .contact__description {
    color: var(--font-white);
    font-family: var(--font-mono);
    text-align: center;
    max-width: 720px;
  }
`

export const ContactWrap = styled.div`
  margin: 3rem auto 0 auto;
  max-width: 890px;
  width: 100%;
  
  label {
    font-family: var(--font-mono);
  }
  
  .form__box {
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 700px;
    min-width: 285px;
    margin: 0 auto 0 auto;
    padding: 1rem;
    gap: .5rem;
    font-size: 1.6rem;
    color: var(--font-white);
  }
  
  .form__input, .form__textarea {
    box-shadow: 4.0px 5.0px 5.0px hsl(0deg 0% 0% / 0.38);
    border: 1px solid var(--border-white);
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    font-family: var(--font-mono);
    background: #2e2e4271;
    color: #fff;
  }

  .form__button {
    border: 0;
    background: #886ce4;
    color: var(--white);
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: 4.0px 5.0px 5.0px hsl(0deg 0% 0% / 0.38);
    height: 60px;
    transition: all 500ms ease-in-out;
  }

  .form__button:hover {
    filter: brightness(1.2);
  }

  .form__button:active {
    background: var(--green);
    border: 1px solid #000;
    color: #000;
    filter: brightness(1.0);
  }
`