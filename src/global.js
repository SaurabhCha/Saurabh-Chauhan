import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    transition: all 0.25s linear;
  }

  h1, h3, p {
    margin:0; 
  }

  #theme{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  input{
    width: 40vw;
    line-height: 2;
    border-radius: 0.5rem;
  }

  textarea{
    width: 40vw;
    line-height: 3;
    border-radius: 0.5rem;
  }
`;
