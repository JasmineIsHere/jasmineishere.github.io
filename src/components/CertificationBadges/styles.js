import styled from "styled-components";

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BadgeCard = styled.a`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 150px;
  padding: 1rem 0.5rem;
  border: 1px solid currentColor;
  border-radius: 3px;
  color: inherit;
  background: transparent;
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;

  img {
    object-fit: contain;
  }

  small {
    font-size: 0.75rem;
  }

  &:hover span {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
`;
