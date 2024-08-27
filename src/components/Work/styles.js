import styled from "styled-components";
import { colors } from "../../utils/colors";

export const WorkContainer = styled.div`
  font-family: "Dokdo", system-ui;
  font-weight: 400;
  font-style: normal;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 5rem;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TechStackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  background-color: ${(props) => props.$bgColor || colors.btn_bg_grey};
  color: ${colors.text_black}; 
  width: fit-content;
  border-radius: 50px;
  font-size: 3rem;
`;

export const ProjectCard = styled.div`
  border-radius: 20px;
  box-shadow: ${(props) => props.$mode === "light" ? "0 0 20px 0 rgba(0, 0, 0, 0.5)" : "0 0 10px 0 rgba(255, 255, 255, 0.5)"};
  width: 30rem;
  height: 30rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;