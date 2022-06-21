import React from "react";
import Hobbies from "./Hobbies/index.jsx";
import Skills from "./Skills/index.jsx";

import { 
  AboutBox, 
  AboutInfo, 
  AboutWrap, 
} from "./styles.jsx";

export default function AboutSection () {
  return (
    <>
      <AboutBox>
          <p className="about__title">about</p>
        <AboutWrap>

          <AboutInfo>
            <div className="about__image">
              <div/>
            </div>

            <div className="about__text">
              <h1 id="about__name">Eric Machado Mendonça</h1>
              <h2>Desenvolvedor web</h2>
              <h3>Porto Alegre</h3>
              <h2 className="about__text--email">wolpak@hotmail.com</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident 
                porro vitae eius dignissimos expedita exercitationem temporibus eligendi? 
                Laudantium itaque soluta rem id quod maiores sit quia beatae impedit nihil. 
              </p>
            </div>
          </AboutInfo>

          <Skills />         
          <Hobbies />
          
        </AboutWrap>
      </AboutBox>
    </>
  )
}