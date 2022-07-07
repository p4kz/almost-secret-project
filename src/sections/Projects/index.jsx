import React from "react";

import { 
  ProjectsBox, 
  ProjectCard,
  ProjectWrap,
} from "./styles";


export default function Projects() {
  return (
    <>
      <ProjectsBox id="projects">
        <h2 className="project__title">Portfolio</h2>
        <p className="project__description">Aqui você pode ver meus projetos mais recentes</p>
        <ProjectWrap>       
          <ProjectCard className="project-card__port">
            <div className="project-card__info--box">
              <h2 className="project-card__name">Portfolio</h2>
              <p className="project-card__description">Desafio, Portfolio - ONE</p>
            </div>
            <div className="project-card__buttons--box">
              <a 
                className="btn-card project-card__button--demo"
                href="#" 
                target="_blank"
              > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="#" 
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
                href="https://a-deco.vercel.app/" 
                target="_blank"
              > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="https://github.com/p4kz/app-cod" 
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
                href="https://4k-p4kz.vercel.app/" 
                target="_blank"
              > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="https://github.com/p4kz/four-k" 
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
                href="https://feedget-two.vercel.app/" 
                target="_blank"
              > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="https://github.com/p4kz/feedget" 
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
                href="https://dsmovie-p4kz.netlify.app/" 
                target="_blank"
              > Demo
              </a>
              <a className="btn-card project-card__button--code"
                href="https://github.com/p4kz/dsmovie" 
                target="_blank"
                > Code 
              </a> 
            </div>
          </ProjectCard>

          <ProjectCard>
            <p className="project-card__comming">Alura geek <br></br>em breve</p>            
          </ProjectCard>
        </ProjectWrap>
      </ProjectsBox>
    </>
  )
}