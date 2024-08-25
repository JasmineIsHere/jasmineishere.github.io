import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.$mode === 'light' ? colors.bg_white : colors.bg_black};
  color: ${(props) => props.$mode === 'light' ? colors.text_black : colors.text_white};
`;

export const LightSwitchContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0rem 2rem 2rem 2rem;
`;

export const LightSwitch = styled.img`
  cursor: pointer;
  transform: translateY(-4px);
  &:active {
    transform: translateY(0);
  }
`;