import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 40vh;
  justify-content: space-around;
  margin: 20vh 25vw 20vh 25vw;
  align-items: center;
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
  &.bottomMargin {
    margin-bottom: 20px;
  }
  &.italic {
    font-style: italic;
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
  width: 70px;
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
  min-height: 100vh;
  margin: 40vh 15vw 25vh 15vw;
  flex-direction: column;
  align-items: center;
  width: 70vw;
`;

export const AboutSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

// background: #e2e2e2;
export const SKillsMainDiv = styled.div`
  border-radius: 5px;
  background-color: rgba(82, 83, 96, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20vh;
  margin-bottom: 20vh;
  &.dark {
    background-color: rgba(82, 83, 96, 255);
  }
  &.light {
    background-color: #ececf5;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  justify-content: space-around;
  .svgIcon {
    height: 80px;
    width: auto;
  }
`;

export const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin: 8px 4px;
  :hover {
    transform: translateY(-1rem) scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ConnectMainDiv = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  margin: 0 20vw;
  flex-direction: column;
`;

export const ContactFormDiv = styled.div`
  display: flex;
  width: 40vw;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  margin: 0 10vw 0 10vw;
  background-image: linear-gradient(to top, #cfd9df 0%, #ececf5 100%);
  margin-top: 20px;
`;

export const ContactDiv = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const SendMessageButton = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: rgb(110, 87, 224);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
