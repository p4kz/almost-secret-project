import React from "react";
import SocialMidia from "../SocialMidia";

import { 
  StartBox, 
  StartWrap 
} from "./styles";

export default function StartSection () {
  return (
    <>
      <StartBox>
        <StartWrap>
          <div className="start__info">
            <h2>Olá, me chamo Eric</h2>
            <h2>e eu sou <strong lang="en">Web Developer</strong></h2>
            <p>--- Abaixo você pode me conhecer melhor ---</p>
          </div>
          <SocialMidia />
        </StartWrap>
      </StartBox>
    </>
  )
}