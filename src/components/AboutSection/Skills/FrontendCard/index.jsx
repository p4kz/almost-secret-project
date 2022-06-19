import React from "react";
import { FrontendCardBox } from "./styles";

export default function FrontendCard() {
  return (
    <>
      <FrontendCardBox>
        <h2>Front-end</h2>
        <p>
          Gosto de desenvolver sites que sejam otimizados para mobile, com um bom SEO e bonitos.
        </p>
        <h3>Ferramentas</h3>
        <ul>      
          <li>CSS</li>
          <li>HTML</li>
          <li>React JS</li>
          <li>Frameworks de estilização</li>
          <li>
            (Bootstrap, Tailwindcss, StyledComponets)
          </li>
        </ul>
      </FrontendCardBox>
    </>
  )
}