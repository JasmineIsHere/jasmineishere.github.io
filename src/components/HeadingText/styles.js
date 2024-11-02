import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${(props) => (props.$size === "small" ? "3rem" : "5rem")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.$size === "small" ? "2.5rem" : "3rem")};
    text-align: center;
  }

  @media (max-width: 320px) {
    font-size: ${(props) => (props.$size === "small" ? "2rem" : "2.5rem")};
  }
`;
