import styled from "styled-components";

export const HobbiesBox = styled.div`
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto 0 auto;
`

export const HobbiesCard = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center; */

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