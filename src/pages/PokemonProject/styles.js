import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  min-height: calc(100vh - 200px);
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;
