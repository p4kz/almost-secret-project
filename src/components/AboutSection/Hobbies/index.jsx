import React from "react";

import { 
  HobbiesBox,
  HobbiesCard,
  SoftSkillsCard
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

        <p className="about__title">Soft Skills</p>
        <SoftSkillsCard>
          <li>
            <FaRegCommentDots />
            <p>Comunicação</p>
          </li>

          <li>
            <FaRegEdit />
            <p>Soluções criativas</p>
          </li>

          <li>
            <FaRegGrinBeamSweat />
            <p>Confiante</p>
          </li>
        </SoftSkillsCard>
      </HobbiesBox>
    </>
  )
}