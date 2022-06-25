import styled from "styled-components";

export const Burger = styled.div`
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;

  position: fixed;
  top: 17.5px;
  right: 20px;

  z-index: 1;

  width: 2rem;
  height: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
  }
  
  div {
    width: 2rem;
    height: .25rem;

    border-radius: 10px;
    transform-origin: 1px;
    
    background: ${({ open }) => open ? '#555' : '#fff'};
    transition: all .3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
  
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
  
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`