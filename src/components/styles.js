import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 40vh;
  justify-content: space-around;
  margin: 25vh;
`;

export const HomeHeader = styled.div`
  font-size: 3rem;
  display: block;
  &.blue {
    color: rgb(110, 87, 224);
  }
`;

export const HomeDev = styled.div`
  font-size: 1.25rem;
  margin-top: 15px;
  display: block;
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
