import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 320px) {
    font-size: 2.5rem;
  }
`;