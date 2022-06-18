import React from "react";
import SocialMidia from "./SocialMidia";
import profileImage from "../../assets/img/profile-test.jpg"

import { 
  HomeBox, 
  HomeBoxImg, 
  HomeImg, 
  HomeInfo, 
  HomeWrap, 
} from "./styles";

export default function HomeSection() {
  return (
    <>
      <HomeBox>
          <HomeWrap>
            <HomeInfo>
              <h2>Olá, meu nome é Eric e eu escrevo códigos</h2>
              <p>
                Sou um entusiasta de tecnologia e no momento estou estudando 
                no Oracle Next Education para alcançar minha formação Full-Stack.
              </p>
              <p className="home__text--info">
                Abaixo você pode me conhecer melhor
              </p>
              <SocialMidia />
            </HomeInfo>

            <HomeBoxImg>
              <HomeImg />
            </HomeBoxImg>
          </HomeWrap>
      </HomeBox>
    </>
  )
}