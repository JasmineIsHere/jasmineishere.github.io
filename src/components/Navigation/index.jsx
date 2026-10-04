import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ButtonsContainer,
  Container,
  IconButton,
  MenuIcon,
  MobileNavigationBar,
  MobileNavigationContainer,
  MobileNavigationMenu,
  NameHeader,
  NavigationContainer,
  NavigationLink,
  ResumeBtn,
} from "./styles";
import { useTheme } from "../../contexts/ThemeContext";
import PrimaryButton from "../PrimaryButton";

const Navigation = ({ children }) => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <NavigationContainer $mode={theme}>
        <NameHeader>
          <Link to="/" aria-label="Jasmine Tan — home">
            Jasmine
            <br />
            Tan
          </Link>
        </NameHeader>
        <PrimaryButton>
          <NavigationLink as={Link} to="/work">
            Work
          </NavigationLink>
        </PrimaryButton>
        <PrimaryButton>
          <NavigationLink as={Link} to="/about">
            About
          </NavigationLink>
        </PrimaryButton>
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
      <MobileNavigationContainer $mode={theme}>
        <MobileNavigationBar>
          <MenuIcon onClick={toggleMenu} />
          <NameHeader>
            <Link to="/" aria-label="Jasmine Tan — home" onClick={closeMenu}>
              Jasmine Tan
            </Link>
          </NameHeader>
        </MobileNavigationBar>
        <MobileNavigationMenu $mode={theme} $isMenuOpen={isMenuOpen}>
          <NavigationLink
            $mode={theme}
            as={Link}
            to="/work"
            onClick={closeMenu}
          >
            Work
          </NavigationLink>
          <NavigationLink
            $mode={theme}
            as={Link}
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavigationLink>
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
        </MobileNavigationMenu>
      </MobileNavigationContainer>
      {children}
    </Container>
  );
};

export default Navigation;
