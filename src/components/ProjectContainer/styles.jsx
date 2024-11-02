import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  margin-bottom: 4rem;
  min-height: calc(100vh - 200px);
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    padding: 2rem;
  }
`;