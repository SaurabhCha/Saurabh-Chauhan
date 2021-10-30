import React from "react";
import {
  HomeContainer,
  TextHeader,
  TextDiv,
  LinksContainer,
  BlueP,
  IntroImage,
} from "./styles";

function Home() {
  return (
    <HomeContainer>
      <div>
        <TextHeader>
          <BlueP>Hi</BlueP>, I'm Saurabh
        </TextHeader>
        <TextDiv>Full Stack Web Developer</TextDiv>
        <TextDiv>
          Specialist Programmer <BlueP>@</BlueP> Infosys
        </TextDiv>
        <LinksContainer>
          <a
            href="https://www.linkedin.com/in/saurabh-chauhan22/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="svgIcon"
              src="/assets/svg/linkedin.svg"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/SaurabhCha"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="svgIcon"
              src="/assets/svg/github.svg"
              alt="github"
            />
          </a>
          <a
            href="https://wa.me/+918267930516"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="svgIcon"
              src="/assets/svg/whatsapp.svg"
              alt="whatsapp"
            />
          </a>
        </LinksContainer>
      </div>
      <div>
        <IntroImage src="/assets/images/home.png" alt="home" />
      </div>
    </HomeContainer>
  );
}

export default Home;
