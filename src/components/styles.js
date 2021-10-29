import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20vh;
  flex-direction: column;
`;

export const HomeHeader = styled.div`
  font-size: 3rem;
  display: contents;
  &.blue {
    color: rgb(110, 87, 224);
  }
`;

export const HomeDev = styled.div`
  font-size: 1.25rem;
  margin-top: 10px;
  display: inline;
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
