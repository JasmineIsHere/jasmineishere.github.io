import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 90vh;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 40px;
  min-width: 50%;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Picture = styled.img`
  object-fit: contain;
  max-width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const Title = styled.p`
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

export const BodyDiv = styled.div`
  font-size: 24px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
`;

export const Girl = styled.span`
  color: #ff8888;
  font-style: italic;
  font-weight: bold;
  font-family: monospace;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #fee4d6;
  border: 2px solid #333;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #fff1ea;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;