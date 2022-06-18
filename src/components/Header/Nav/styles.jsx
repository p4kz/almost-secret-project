import styled from "styled-components";

export const NavUl = styled.ul`
  display: flex;
  
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;

    font-size: 3rem;
    
    position: fixed;
    top: 0;
    right: 0;

    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    transition: transform .3s ease-in-out;

    height: 100vh;
    width: 300px;
    
    
    padding-top: 30%;
    background: #101010fa;
  }
` 

export const NavLi = styled.li`
  margin-right: 1.8rem;
`