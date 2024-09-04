import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgColor || colors.btn_bg_grey};
  color: ${(props) => props.$color || colors.text_black};
  border-radius: 50px;
  padding: ${(props) => props.$padding || "0rem 3rem"};
  margin: ${(props) => props.$margin || "1rem 0"};
  gap: 1rem;
  cursor: pointer;
  width: fit-content;
  box-shadow: ${(props) =>
    props.$hasShadow ? "0 0 10px 0 rgba(0, 0, 0, 0.5)" : "none"};
  font-family: "Dokdo", system-ui;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }

  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
