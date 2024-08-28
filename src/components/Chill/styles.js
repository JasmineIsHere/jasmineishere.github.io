import styled from "styled-components";

export const ChillContainer = styled.div`
  font-family: "Dokdo", system-ui;
  font-weight: 400;
  font-style: normal;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
`;

export const Picture = styled.img`
  object-fit: contain;
  max-width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
`;


export const Body = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  line-height: 1.5;
  font-size: 2rem;
  margin-right: 2rem;
`;

export const StyledText = styled.span`
  color: ${(props) => props.$color || "inherit"};
  font-weight: ${(props) => props.$bold ? "bold" : "normal"};
  font-style: ${(props) => props.$italic ? "italic" : "normal"};
  text-decoration: ${(props) => props.$underline ? "underline" : "none"};
  font-size: ${(props) => props.$fontSize || "inherit"};
  cursor: ${(props) => props.$pointer ? "pointer" : "auto"};
`;