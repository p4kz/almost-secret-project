import styled from "styled-components";

export const NavUl = styled.ul`
  display: flex;
  height: 27px;

  .nav__list {
    margin-left: 1.8rem;
  }
  
  .nav__link {
    color: var(--bg-primary);
  }
  
  .nav__list:hover {
    border-bottom: 3px solid var(--green);
  }
  
  .nav__link:active {
    color: var(--green);
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    background: var(--bg-secudary);
    flex-flow: column nowrap;
    font-size: 3rem;
    height: 100vh;
    width: 300px;
    padding-top: 30%;
    transition: transform .3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    
    position: fixed;
    right: 0;
    top: 0;
    
    .nav__list {
      margin: 2rem 0 0 0;
    }

    .nav__list:hover {
      transform: scale(1.15);
    }
  }
` 