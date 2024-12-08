import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ListItem = styled.li`
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

export const Strikethrough = styled.span`
  text-decoration: line-through;
`;