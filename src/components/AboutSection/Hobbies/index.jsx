import React from "react";

import { 
  HobbiesBox,
  HobbiesCard,
  ExperienceCard
} from "./styles";

import { 
  FaMusic,
  FaLaptop,
  FaDesktop,
  FaGamepad,
  FaPalette,
  FaRegCommentDots,
  FaRegEdit,
  FaRegGrinBeamSweat,
} from "react-icons/fa";

export default function Hobbies() {
  return (
    <>
      <HobbiesBox>
        <p className="about__title">Hobbies</p>

        <HobbiesCard>
          <li>
            <FaMusic />
            <p>Música</p>
          </li>

          <li>
            <FaDesktop />
            <p>Séries</p> 
          </li>

          <li>
            <FaGamepad />
            <p>Games</p>
          </li>

          <li>
            <FaPalette />
            <p>Arte</p>
          </li>
        </HobbiesCard>

        <p className="about__title">Complementar</p>
        <ExperienceCard>
          <li className="experience--robotica">
            <div className="experience__box">
              <h2 className="experience__title">Robótica</h2>
              <p className="experience__date">2009 - 2014</p>
              <p className="experience__text">
                Fazia parte da equipe de robótica que representava a escola E.M.E.F Dep.Victor Issler participava de competições e eventos de tecnologia, 
                foi meu primeiro contato com programação e foi dai que veio meu amor por <span lang="en">hardware</span> e interesse por <span lang="en">software</span>.
              </p>
            </div>
          </li>
        </ExperienceCard>
      </HobbiesBox>
    </>
  )
}