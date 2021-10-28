import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: 
    padding: 0;
    margin: 0;
    transition: all 0.25s linear;
  }

  #theme{
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
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
`;
//body
// display: flex;
//     flex-direction: column;
//     align-items: center;
// font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;