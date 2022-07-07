import React from "react";
import SocialMidia from "../../components/SocialMidia";

import { 
  StartBox, 
  StartWrap 
} from "./styles";

export default function Start() {
  return (
    <>
      <StartBox>
        <StartWrap>
          <div className="start__info">
            <h2 className="start__info--text">Olá, me chamo Eric <br/> e eu sou <strong lang="en">Web Developer</strong></h2>
            <p className="start__info--description">--- Abaixo você pode me conhecer melhor ---</p>
          </div>
          <SocialMidia />
        </StartWrap>
      </StartBox>
    </>
  )
}