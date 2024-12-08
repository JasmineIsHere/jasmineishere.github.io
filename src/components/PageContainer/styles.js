import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;