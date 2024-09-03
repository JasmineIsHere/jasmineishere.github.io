/* styles.css */

import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavigationContainer = styled.div`
  font-family: "Dokdo", system-ui;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0 0 2rem;
  background-color: ${(props) => props.$mode === 'light' ? colors.bg_white : colors.bg_black};
  color: ${(props) => props.$mode === 'light' ? colors.text_black : colors.text_white};

  @media (max-width: 768px) {
    padding: 2rem 0 0 0;
    align-items: center;
  }
`;

export const NameHeader = styled.h1`
  font-size: 6rem;
  font-family: "Dokdo", system-ui;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    line-height: 1;
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
  color: ${colors.text_black};
  text-decoration: none;
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

