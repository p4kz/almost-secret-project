import React from "react";

import './styles.jsx'
import { 
  SkillsBox,
  SkillsCard,
} from "./styles.jsx";

export default function Skills () {
  return (
    <>
      <SkillsBox>
        <SkillsCard>
          <h2 className="skills__title">Back-end</h2>
          <p className="skills__text">Tenho entendimento com essas tecnologias, mas ainda estou desenvolvendo essas habilidades.</p>
          <h3 className="skills__subtitle">Ferramentas</h3>
          <ul className="skills__list">      
            <li  className="skills__item">JavaScript</li>
            <li className="skills__item">Node JS</li>
          </ul>
        </SkillsCard>

        <SkillsCard className="skills__card--frontend">
          <h2 className="skills__title">Front-end</h2>
          <p className="skills__text">Gosto de desenvolver sites que sejam otimizados para mobile, com um bom SEO e bonitos.</p>
          <h3 className="skills__subtitle">Ferramentas</h3>
          <ul className="skills__list">      
            <li className="skills__item">CSS</li>
            <li className="skills__item">HTML</li>
            <li className="skills__item">React JS</li>
            <li className="skills__item">Frameworks de estilização</li>
            <li className="skills__item">(Bootstrap, Tailwindcss, StyledComponets)</li>
          </ul>
        </SkillsCard>

        <SkillsCard>
          <h2 className="skills__title">Mobile</h2>
          <p className="skills__text">Ja fiz alguns projetos, mas pretendo me aprimorar mais em desenvolvimento mobile. </p>
          <h3 className="skills__subtitle">Ferramentas</h3>
          <ul className="skills__list">      
            <li className="skills__item">Expo</li>
            <li className="skills__item">React Native</li>
          </ul>
        </SkillsCard>
      </SkillsBox>
    </>
  )
}