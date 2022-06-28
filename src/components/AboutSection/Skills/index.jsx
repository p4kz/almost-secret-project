import React from "react";

import { 
  SkillsBox,
  SkillsCard,
} from "./styles.jsx";

import Tilt from 'react-vanilla-tilt'

export default function Skills () {
  return (
    <>
      <SkillsBox>
        <SkillsCard>
          <Tilt
            id="tilt"     
            options={{ scale: 2 }}
            style={{}}
          >
            <h2 className="skills__title" lang="en">Back-end</h2>
            <p className="skills__text">Tenho entendimento com essas tecnologias, mas ainda estou desenvolvendo essas habilidades.</p>
            <h3 className="skills__subtitle">Ferramentas</h3>
            <ul className="skills__list">      
              <li  className="skills__item" lang="en">JavaScript</li>
              <li className="skills__item" lang="en">Node JS</li>
            </ul>
          </Tilt>
        </SkillsCard>

        <SkillsCard className="skills__card--frontend">
          <Tilt
            id="tilt"     
            options={{ scale: 2 }}
            style={{}}
          >
            <h2 className="skills__title" lang="en">Front-end</h2>
            <p className="skills__text">Gosto de desenvolver sites que sejam otimizados para mobile, com um bom SEO e bonitos.</p>
            <h3 className="skills__subtitle">Ferramentas</h3>
            <ul className="skills__list">      
              <li className="skills__item" lang="en">CSS</li>
              <li className="skills__item" lang="en">HTML</li>
              <li className="skills__item" lang="en">React JS</li>
              <li className="skills__item"> <span lang="en">Frameworks</span> de estilização</li>
              <li className="skills__item" lang="en">(Bootstrap, Tailwindcss, StyledComponets)</li>
            </ul>
          </Tilt>
        </SkillsCard>

        <SkillsCard>
          <Tilt
            id="tilt"     
            options={{ scale: 2 }}
            style={{}}
          >
            <h2 className="skills__title" lang="en">Mobile</h2>
            <p className="skills__text">Ja fiz alguns projetos, mas pretendo me aprimorar mais em desenvolvimento mobile. </p>
            <h3 className="skills__subtitle">Ferramentas</h3>
            <ul className="skills__list">      
              <li className="skills__item" lang="en">Expo</li>
              <li className="skills__item" lang="en">React Native</li>
            </ul>
          </Tilt>
        </SkillsCard>
      </SkillsBox>
    </>
  )
}