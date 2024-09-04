import styled from "styled-components";
import { colors } from "../../utils/colors";

export const WorkContainer = styled.div`
  font-family: "Dokdo", system-ui;
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;

  @media (max-width: 768px) {
    align-items: center;
    padding: 2rem 1rem;
  }

  @media (max-width: 320px) {
    overflow: hidden;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;


  @media (max-width: 768px) {
    align-items: center;
    padding: 0 2rem;
  }

  @media (max-width: 320px) {
    padding: 0;
  }
`;

export const SubHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SubHeadingLine = styled.div`
  flex-grow: 1;
  max-width: 70%;
  height: 0.5rem;
  background-color: ${(props) => props.$mode === "light" ? colors.bg_black : colors.bg_white};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubHeadingText = styled.h2`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) { 
    font-size: 1.5rem;
  }
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    max-width: 90%;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 90%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  width: 30rem;
  height: 30rem;
  perspective: 1000px;

  @media (max-width: 768px) {
    width: 15rem;
    height: 15rem;
  }

  @media (max-width: 320px) {
    width: 8rem;
    height: 8rem;
`;

export const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  will-change: transform;

  &:hover {
    cursor: pointer;
    transform: rotateY(180deg);
  }

  div {
    box-shadow: ${(props) => props.$mode === "light" ? "0 0 20px 0 rgba(0, 0, 0, 0.5)" : "0 0 10px 0 rgba(255, 255, 255, 0.5)"};
  }
`;

export const ProjectFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 20px;
`;

export const ProjectImg = styled(ProjectFace)`
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
`;

export const ProjectBack = styled(ProjectFace)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgColor || colors.btn_bg_grey};
  color: ${(props) => props.$color || colors.text_black};
  transform: rotateY(180deg);
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;