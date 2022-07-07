import React from "react";
import Academic from "./Academic/index.jsx";
import Hobbies from "./Hobbies/index.jsx";
import Skills from "./Skills/index.jsx";

import { 
  AboutBox, 
  AboutInfo, 
  AboutRow, 
  AboutWrap, 
} from "./styles.jsx";

export default function About() {
  return (
    <>
      <AboutBox id="about">
          <p className="about__title">about</p>
        <AboutWrap>

          <AboutInfo>
            <div className="about__image">
              <div />
            </div>

            <div className="about__text">
              <h1 id="about__name">Eric Machado Mendonça</h1>
              <h2 className="about__subname">Desenvolvedor <span lang="en">Web</span></h2>
              <h3 className="about__city">Porto Alegre</h3>
              <h2 className="about__text--email">wolpak@hotmail.com</h2>
              <p className="about__text--description">
                Olá, sou Eric, tenho 23 anos e
                tenho uma maior afinidade com a area de Front-end
                por ter experiência nas ferramentas de designer mas minha maior ambição é ter técnica para desenvolver apps 
                completos tanto <span lang="en">Front-end</span> quando <span lang="en">Back-end</span>. Atualmente estudo na <a 
                  lang="en"
                  className="about__anchor--oracle" 
                  href="https://www.oracle.com/br/education/oracle-next-education/" 
                  target="_blank">Oracle Next Education 
                </a> para alcançar meu conhecimento <span lang="en">Full-stack </span>
                e ta sendo a coisa mais legal que ja fiz, estou aprendendo muito com essa experiência e esse portfolio é um fruto disso, 
                estou muito agradecido pela oportunidade de estar aqui hoje. 
              </p>
            </div>
          </AboutInfo>

          <Skills />

          <AboutRow>
            <Hobbies />
            <Academic />
          </AboutRow>         
          
        </AboutWrap>
      </AboutBox>
    </>
  )
}