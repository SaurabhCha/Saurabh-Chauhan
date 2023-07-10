import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Home from "./components/Home";
import About from "./components/About";

const ThemeDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  padding-right: 30px;
  height: 10vh;
`;

const ThemeButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 20%;
  border: none;
  cursor: pointer;
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ThemeDiv>
          <ThemeButton id="theme" onClick={toggleTheme}>
            {theme === "light" ? (
              <img src="/assets/svg/moon.svg" alt="dark" />
            ) : (
              <img src="/assets/svg/sun.svg" alt="light" />
            )}
          </ThemeButton>
        </ThemeDiv>
        <Home />
        <About />
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
