import React from "react";
import {
  HomeContainer,
  HomeHeader,
  HomeDev,
  LinksContainer,
  BlueP,
} from "./styles";

function Home() {
  return (
    <HomeContainer>
      <div>
        <HomeHeader>
          <BlueP>Hi</BlueP>, I'm Saurabh
        </HomeHeader>
        <HomeDev>Full Stack Web Developer</HomeDev>
        <HomeDev>
          Specialist Programmer <BlueP>@</BlueP> Infosys
        </HomeDev>
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
        <img src="/assets/svg/coding.svg" alt="linkedin" />
      </div>
    </HomeContainer>
  );
}

export default Home;
