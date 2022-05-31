import React from "react";

import { 
  House,
  User,
  Laptop,
  BookBookmark,
  EnvelopeSimpleOpen
} from "phosphor-react";

import { 
  Nav,
} from './styles'

export default function Navbar() {
  return (
    <Nav>
      <a href="#house">
        <House 
          size={24} 
          weight="bold"
          color="#121214"
        />
      </a>
      <a href="#profile">
        <User 
          size={24} 
          weight="bold" 
          color="#121214"
        />
      </a>
      <a href="#skilss">
        <BookBookmark 
          size={24} 
          weight="bold"
          color="#121214"
        />
      </a>
      <a href="#projects">
        <Laptop 
          size={24} 
          weight="bold"
          color="#121214"
        />
      </a>
      <a href="#contact">
        <EnvelopeSimpleOpen 
          size={24} 
          weight="bold" 
          color="#121214"
        />
      </a>
    </Nav>
  )
}