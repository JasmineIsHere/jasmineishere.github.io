import React from "react";
import {
  ButtonsContainer,
  Container,
  DownloadBtn,
  IconButton,
  NameHeader,
  NavigationButton,
  NavigationContainer,
  NavigationLink,
  ResumeBtn,
} from "./styles";
import { useTheme } from "../../contexts/ThemeContext";

const Navigation = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Container>
      <NavigationContainer $mode={theme}>
        <NameHeader>
          Jasmine
          <br />
          Tan
        </NameHeader>
        <NavigationButton>
          <NavigationLink href="/">Work</NavigationLink>
        </NavigationButton>
        <NavigationButton>
          <NavigationLink href="/#/about">About</NavigationLink>
        </NavigationButton>
        <ButtonsContainer>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/jasmine-tan-jm/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/linkedin_icon.png"
                alt="linkedin_profile"
                width="50rem"
              />
            </a>
          </IconButton>
          <IconButton>
            <a href="/Resume.pdf" target="_blank">
              <ResumeBtn
                src="/resume_icon.png"
                alt="resume_download"
                width="50rem"
              />
            </a>
          </IconButton>
        </ButtonsContainer>
      </NavigationContainer>
      {children}
    </Container>
  );
};

export default Navigation;
