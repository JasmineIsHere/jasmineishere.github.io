import { Timeline } from "antd";
import styled from "styled-components";
import BodyText from "../../components/BodyText";

export const ChillContainer = styled.div`
  font-family: "Dokdo", system-ui;
  font-weight: 400;
  font-style: normal;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    align-items: center;
    padding: 2rem;
  }
`;

export const Picture = styled.img`
  object-fit: contain;
  max-width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledText = styled.span`
  color: ${(props) => props.$color || "inherit"};
  font-weight: ${(props) => (props.$bold ? "bold" : "normal")};
  font-style: ${(props) => (props.$italic ? "italic" : "normal")};
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
  font-size: ${(props) => props.$fontSize || "inherit"};
  cursor: ${(props) => (props.$pointer ? "pointer" : "auto")};
`;

export const VideoContainer = styled.iframe`
  width: 560px;
  height: 315px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const StyledTimeline = styled(Timeline)`
  color: ${(props) => props.$color || "inherit"};

  .ant-timeline-item-tail {
    border-inline-start: 2px solid ${(props) => props.$lineColor || "inherit"};
    inset-block-start: 2rem;
  }

  .ant-timeline-item-head {
    background-color: ${(props) => props.$color || "inherit"};
    inset-block-start: 1.5rem;
  }

`;

export const TimelineHeadingText = styled.h2`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TimelineBodyText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;