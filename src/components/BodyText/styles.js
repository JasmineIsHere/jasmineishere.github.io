import styled from "styled-components";

export const Body = styled.div`
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
  font-size: 2rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: justify;
    margin-right: 0;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;