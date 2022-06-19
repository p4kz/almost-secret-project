import React from "react";
import BackendCard from "./BackendCard/index.jsx";
import FrontendCard from "./FrontendCard/index.jsx";
import MobileCard from "./MobileCard/index.jsx";

import './styles.jsx'
import { 
  SkillsBox,
} from "./styles.jsx";

export default function Skills () {
  return (
    <>
      <SkillsBox>
        <BackendCard />
        <FrontendCard />
        <MobileCard />
      </SkillsBox>
    </>
  )
}