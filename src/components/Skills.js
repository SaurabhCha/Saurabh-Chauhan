import React, { useState, useEffect } from "react";
import { SkillsContainer, Skill, SKillsMainDiv, TextHeader } from "./styles";

// Can add Bootstrap and MUI
function Skills(props) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(props.theme);
  }, [props.theme]);

  return (
    <SKillsMainDiv>
      <TextHeader>Key Skills</TextHeader>
      <SkillsContainer>
        <Skill>
          <img className="svgIcon" src="/assets/svg/js.svg" alt="js" />
          <p>JS</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/html5.svg" alt="html5" />
          <p>HTML</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/css3.svg" alt="css3" />
          <p>CSS</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/react.svg" alt="react" />
          <p>React</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/nextjs.svg" alt="nextjs" />
          <p>NextJs</p>
        </Skill>
        <Skill>
          <img
            className="svgIcon"
            src="/assets/svg/angular.svg"
            alt="angular"
          />
          <p>Angular</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/nodejs.svg" alt="nodejs" />
          <p>NodeJs</p>
        </Skill>
        <Skill>
          <img
            className="svgIcon"
            src="/assets/svg/express.svg"
            alt="express"
          />
          <p>Express</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/aws.svg" alt="aws" />
          <p>AWS</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/git.svg" alt="git" />
          <p>Git</p>
        </Skill>
        <Skill>
          <img
            className="svgIcon"
            src="/assets/svg/mongodb.svg"
            alt="mongodb"
          />
          <p>MongoDB</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/sql.svg" alt="sql" />
          <p>SQL</p>
        </Skill>
        <Skill>
          <img className="svgIcon" src="/assets/svg/redux.svg" alt="redux" />
          <p>Redux</p>
        </Skill>
      </SkillsContainer>
    </SKillsMainDiv>
  );
}
export default Skills;
