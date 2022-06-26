import React from "react";

import { 
  FaGithubSquare,
  FaLinkedin, 
  FaArrowAltCircleDown 
} from "react-icons/fa"

import { 
  MidiaBox,
  MidiaItem,
  MidiaItemButtom 
} from "./styles";

import curriculo from '../../assets/file/curriculo.pdf'

export default function SocialMidia() {
  return (
    <>
      <MidiaBox>
        <MidiaItem>
          <a href="https://github.com/p4kz" target="_blank">
            <FaGithubSquare /> 
            Github
          </a>
        </MidiaItem>

        <MidiaItem>
          <a href="https://www.linkedin.com/in/p4kz/" target="_blank">
            <FaLinkedin /> 
            Linkedin
          </a>
        </MidiaItem>

        <MidiaItem>
          <a href={ curriculo } target="_black" download>
            <FaArrowAltCircleDown />
            Curriculo
          </a>
        </MidiaItem>
        
        <MidiaItemButtom>
          <a href="#projects">Veja meus projetos</a>
        </MidiaItemButtom>
      </MidiaBox>
    </>
  )
} 