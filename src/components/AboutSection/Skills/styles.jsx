import styled from "styled-components";

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 500px;
  padding: 3rem 0;

  p, li {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 940px) {
    margin: 0;
  }
`
