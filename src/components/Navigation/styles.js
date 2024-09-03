/* styles.css */

import styled from "styled-components";
import { colors } from "../../utils/colors";
import { MenuOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  font-family: "Dokdo", system-ui;
  font-size: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0 0 2rem;
  background-color: ${(props) =>
    props.$mode === "light" ? colors.bg_white : colors.bg_black};
  color: ${(props) =>
    props.$mode === "light" ? colors.text_black : colors.text_white};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NameHeader = styled.h1`
  font-size: 6rem;
  font-family: "Dokdo", system-ui;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
    line-height: 1;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const NavigationButton = styled.div`
  background-color: ${colors.btn_bg_grey};
  border-radius: 50px;
  padding: 0rem 3rem;
  cursor: pointer;
  width: fit-content;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavigationLink = styled.a`
  color: ${(props) =>
    props.$mode === "dark" ? colors.text_white : colors.text_black};
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ResumeBtn = styled.img`
  cursor: pointer;
`;

export const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MobileNavigationContainer = styled.div`
  display: none;
  z-index: 1;
  box-shadow: ${(props) =>
    props.$mode === "light"
      ? "0 0 10px 0 rgba(0, 0, 0, 0.5)"
      : "0 0 5px 0 rgba(255, 255, 255, 1)"};
  background-color: ${(props) =>
    props.$mode === "light" ? colors.bg_white : colors.bg_black};
  color: ${(props) =>
    props.$mode === "light" ? colors.text_black : colors.text_white};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileNavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  height: 3rem;
  
`;

export const MenuIcon = styled(MenuOutlined)`
  position: absolute;
  left: 1rem;
  width: 2rem;
  height: 2rem;

  @media (max-width: 425px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const MobileNavigationMenu = styled.div`
  display: ${(props) => (props.$isMenuOpen ? "flex" : "none")};
  align-items: center;
  padding: 2rem 0;
  flex-direction: column;
  gap: 2rem;
  width: 100vw;
  color: ${(props) =>
    props.$mode === "light" ? colors.text_black : colors.text_white};
  background-color: ${(props) =>
    props.$mode === "light" ? colors.bg_white : colors.bg_black};

  @media (max-width: 320px) {
    padding: 1rem 0;
  }
`;
