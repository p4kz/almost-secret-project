import styled from "styled-components";

export const HobbiesBox = styled.div`
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  width: 35%;
  min-width: 278px;

  @media screen and (max-width: 769px) {
    width: 90%;
    margin: auto;
    min-width: 285px;
  }

`

export const HobbiesCard = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  li {
    align-items: center;
    text-align: center;
    margin: .5rem;
    border: 1px solid #fff;
    padding: 1rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    color: #fff;
  }
`

export const SoftSkillsCard = styled.ul`

  li {
    align-items: center;
    text-align: center;
    border: 1px solid #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    border-radius: 1rem;
    color: #fff;
  }
`