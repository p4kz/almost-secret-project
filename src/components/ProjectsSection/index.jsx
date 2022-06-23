import React from "react";

import { 
  ProjectsBox, 
  ProjectCard,
  ProjectWrap,
} from "./styles";


export default function ProjectsSection () {
  return (
    <>
      <ProjectsBox>
        <p className="project__title">Portifolio</p>
        <ProjectWrap>       
          <ProjectCard className="project-card__port">
            <div className="project-card__info--box">
              <h2 className="project-card__name">Portifolio</h2>
              <p className="project-card__description">Desafio, Portifolio - ONE</p>
            </div>
            <div className="project-card__buttons--box">
              <a 
                className="btn-card project-card__button--demo"
                href="http://google.com" 
                target="_blank"
                > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="http://google.com" 
                target="_blank"
                > Code 
              </a> 
            </div>
          </ProjectCard>

          <ProjectCard className="project-card__cod">
            <div className="project-card__info--box">
              <h2 className="project-card__name">Encriptador de texto</h2>
              <p className="project-card__description">Desafio, Codificador - ONE</p>
            </div>
            <div className="project-card__buttons--box">
              <a 
                className="btn-card project-card__button--demo"
                href="http://google.com" 
                target="_blank"
                > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="http://google.com" 
                target="_blank"
                > Code 
              </a> 
            </div>
          </ProjectCard>

          <ProjectCard className="project-card__fork">
            <div className="project-card__info--box">
              <h2 className="project-card__name">Jogo da forca</h2>
              <p className="project-card__description">Desafio, Jogo da forca - ONE</p>
            </div>
            <div className="project-card__buttons--box">
              <a 
                className="btn-card project-card__button--demo"
                href="http://google.com" 
                target="_blank"
                > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="http://google.com" 
                target="_blank"
                > Code 
              </a> 
            </div>
          </ProjectCard>

          <ProjectCard className="project-card__feedget">
            <div className="project-card__info--box">
              <h2 className="project-card__name">Feedbacks anônimos</h2>
              <p className="project-card__description">Academico, Feedget - Rocketseat</p>
            </div>
            <div className="project-card__buttons--box">
              <a 
                className="btn-card project-card__button--demo"
                href="http://google.com" 
                target="_blank"
                > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="http://google.com" 
                target="_blank"
                > Code 
              </a> 
            </div>
          </ProjectCard>

          <ProjectCard className="project-card__dsmovie">
            <div className="project-card__info--box">
              <h2 className="project-card__name">Scoreboard de filmes</h2>
              <p className="project-card__description">Academico, DSMovie - DevSuperior</p>
            </div>
            <div className="project-card__buttons--box">
              <a 
                className="btn-card project-card__button--demo"
                href="http://google.com" 
                target="_blank"
                > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="http://google.com" 
                target="_blank"
                > Code 
              </a> 
            </div>
          </ProjectCard>

          <ProjectCard />
        </ProjectWrap>
      </ProjectsBox>
    </>
  )
}