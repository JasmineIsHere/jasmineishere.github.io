import styled from "styled-components";

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
  font-weight: ${(props) => props.$bold ? "bold" : "normal"};
  font-style: ${(props) => props.$italic ? "italic" : "normal"};
  text-decoration: ${(props) => props.$underline ? "underline" : "none"};
  font-size: ${(props) => props.$fontSize || "inherit"};
  cursor: ${(props) => props.$pointer ? "pointer" : "auto"};
`;

export const VideoContainer = styled.iframe`
  width: 560px;
  height: 315px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;