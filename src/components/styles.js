import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 40vh;
  justify-content: space-around;
  margin: 20vh 25vw 20vh 25vw;
`;

export const TextHeader = styled.div`
  font-size: 3rem;
  display: block;
  &.blue {
    color: rgb(110, 87, 224);
  }
  &.aboutMe {
    margin-bottom: 5vh;
  }
`;

export const TextDiv = styled.div`
  font-size: 1.25rem;
  margin-top: 15px;
  display: block;
  &.about {
    max-width: 100%;
  }
`;

export const IntroDiv = styled.div`
  align-self: center;
`;

export const BlueP = styled.p`
  display: inline;
  color: rgb(110, 87, 224);
`;

export const LinksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100px;
  .svgIcon {
    height: 20px;
    width: auto;
    margin-right: 10px;
    transition: transform 0.5s ease-in;
  }
  .svgIcon:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 40vh 25vw 25vh 25vw;
  flex-direction: column;
  align-items: center;
`;

export const AboutSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CvButton = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: rgb(110, 87, 224);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 5vh;
`;

export const IntroImage = styled.img`
  height: 300px;
  &.about {
    margin-right: 10vw;
  }
`;

export const IntroColumnDiv = styled.div`
  max-width: 30vw;
`;
