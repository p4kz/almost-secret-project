import React from "react";

import { 
  AcademicBox,
  AcademicCard 
} from "./styles";


export default function Academic() {
  return (
    <>
      <AcademicBox>
        <p className="about__title">Formação</p>
        <AcademicCard>
          <div className="academic__image--one"/>
          <div className="academic__info">
            <h3 className="academic__name" lang="en">
              Oracle Next Education
            </h3>
            <p className="academic__date">
              2022 - Em andamento
            </p>
            <p className="academic__description">
              Alura + <span lang="en">Oracle</span> - Formação <span lang="en">Full-Stack</span>  
            </p>
          </div>
        </AcademicCard>

        <AcademicCard>
          <div className="academic__image--udemy"/>
          <div className="academic__info">
            <h3 className="academic__name" lang="en">
            JavaScript e TypeScript
            </h3>
            <p className="academic__date">
              2022 - Em andamento
            </p>
            <p className="academic__description">
              Prof.Luiz Otavio - Formação <span lang="en">Full-Stack</span>  
            </p>
          </div>
        </AcademicCard>

        <AcademicCard>
          <div className="academic__image--pronatec"/>
          <div className="academic__info">
            <h3 className="academic__name">
              Pronatec + UniRitter
            </h3>
            <p className="academic__date">
              2016 - 2018
            </p>
            <p className="academic__description">
              Gestão de Logística, Administração de Empresas
            </p>
          </div>
        </AcademicCard>

      </AcademicBox>
    </>
  )
}