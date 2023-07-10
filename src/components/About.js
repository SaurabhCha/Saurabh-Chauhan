import React from "react";
import {
  AboutContainer,
  AboutSubContainer,
  TextHeader,
  TextDiv,
  CvButton,
  IntroImage,
  IntroColumnDiv,
} from "./styles";
import Skills from "./Skills";

function About() {
  return (
    <AboutContainer>
      <TextHeader className="aboutMe">About Me</TextHeader>
      <AboutSubContainer>
        <div>
          <IntroImage
            className="about"
            src="/assets/images/about1.png"
            alt="about me"
          />
        </div>
        <IntroColumnDiv>
          <TextDiv className="about">
            I'm a Passionate and emerging full stack web developer with a strong
            sense for aesthetics and interaction using HTML, CSS and JavaScript
            to build all aspects of a website.
          </TextDiv>
          <CvButton download href="assets/pdf/Resume_Sample.pdf">
            Download CV
          </CvButton>
        </IntroColumnDiv>
      </AboutSubContainer>
      <Skills />
    </AboutContainer>
  );
}

export default About;
