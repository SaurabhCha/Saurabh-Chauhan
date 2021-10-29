import React, { useState } from "react";
import {
  HomeContainer,
  HomeHeader,
  HomeDev,
  LinksContainer,
  BlueP,
} from "./styles";

function Home() {
  const [lapColor, setLapColor] = useState("#6E57E0");

  const hanldeLapClick = () => {
    setLapColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };
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
        <svg
          width="320"
          height="320"
          fill={lapColor}
          viewBox="0 0 100 100"
          onClick={hanldeLapClick}
          className="lapHover"
        >
          <path
            d="M63.03,45.36h-2.78V13.1c0-1.76-1.43-3.19-3.19-3.19H6.94c-1.76,0-3.19,1.43-3.19,3.19v32.25H0.97
		C0.43,45.36,0,45.79,0,46.33c0,4.28,3.48,7.76,7.76,7.76h48.48c4.28,0,7.76-3.48,7.76-7.76C64,45.79,63.57,45.36,63.03,45.36z
		 M5.69,13.1c0-0.7,0.55-1.25,1.25-1.25h50.11c0.7,0,1.25,0.55,1.25,1.25v32.25H5.69V13.1z M56.24,52.15H7.76
		c-2.88,0-5.27-2.1-5.74-4.85h59.96C61.52,50.05,59.12,52.15,56.24,52.15z"
          />
          <path
            d="M53.71,14.29H10.29c-0.54,0-0.97,0.43-0.97,0.97V42c0,0.54,0.43,0.97,0.97,0.97h43.41c0.54,0,0.97-0.43,0.97-0.97V15.26
		C54.68,14.72,54.24,14.29,53.71,14.29z M52.74,41.03H11.26v-24.8h41.47V41.03z"
          />
          <path d="M24.87 35.49c.18.14.39.21.6.21.29 0 .57-.13.76-.37.33-.42.26-1.03-.16-1.36l-6.49-5.14 6.81-5.56c.42-.34.48-.95.14-1.36-.34-.42-.95-.48-1.36-.14l-7.75 6.32c-.23.19-.36.46-.36.76 0 .29.14.57.37.75L24.87 35.49zM44.42 28.83l-6.49 5.14c-.42.33-.49.94-.16 1.36.19.24.48.37.76.37.21 0 .42-.07.6-.21l7.44-5.89c.23-.18.37-.46.37-.75 0-.29-.13-.57-.36-.76l-7.75-6.32c-.42-.34-1.03-.28-1.36.14-.34.42-.28 1.03.14 1.36L44.42 28.83zM29.27 36.33c.11.04.21.06.32.06.4 0 .77-.25.91-.65l4.77-13.58c.18-.51-.09-1.06-.59-1.24-.51-.18-1.06.09-1.24.59l-4.77 13.58C28.5 35.6 28.77 36.15 29.27 36.33z" />
        </svg>
      </div>
    </HomeContainer>
  );
}

export default Home;
