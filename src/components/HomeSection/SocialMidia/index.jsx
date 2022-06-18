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

export default function SocialMidia() {
  return (
    <>
      <MidiaBox>
        <MidiaItem>
          <a href="https://">
            <FaGithubSquare /> 
            Github
          </a>
        </MidiaItem>

        <MidiaItem>
          <a href="http://">
            <FaLinkedin /> 
            Linkedin
          </a>
        </MidiaItem>

        <MidiaItem>
          <a href="http://">
            <FaArrowAltCircleDown/>
            Curriculo
          </a>
        </MidiaItem>
        
        <MidiaItemButtom>
          <a href="http://">Veja meus projetos</a>
        </MidiaItemButtom>
      </MidiaBox>
    </>
  )
} 