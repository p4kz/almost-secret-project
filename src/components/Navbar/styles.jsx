
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin-left: 16px;
  margin-top: 16px;

  width: 45px;
  background: rgba(199, 199, 199, 0.4);
  border-radius: 60px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: var(--font-primary);

  & a {
    /* border-radius: 50%; */
    border: 0;
    padding: 10px;
  }
  
`