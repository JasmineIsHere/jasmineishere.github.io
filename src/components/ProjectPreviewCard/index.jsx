import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardContainer, ProjectCard, ProjectBack } from "../../pages/Work/styles";
import { ButtonContainer } from "../PrimaryButton/styles";
import { colors } from "../../utils/colors";
import { useTheme } from "../../contexts/ThemeContext";

const Container = styled(CardContainer)`
  &:focus-within ${ProjectCard}, &[data-revealed="true"] ${ProjectCard} {
    transform: rotateY(180deg);
  }
  &:focus-within { outline: 3px solid currentColor; outline-offset: 6px; border-radius: 20px; }
  @media (prefers-reduced-motion: reduce) {
    ${ProjectCard} { transition: none; }
    a { transition: none; }
  }
`;
const Front = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  border: 0;
  border-radius: 20px;
  padding: 1.5rem 0;
  background: #000;
  color: ${colors.text_white};
  font: inherit;
  cursor: pointer;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img { width: 100%; height: auto; }
  span { font-size: 2rem; }
  @media (max-width: 768px) { span { font-size: 1.5rem; } }
`;
const Action = styled(ButtonContainer)`
  text-decoration: none;
  &:focus-visible { outline: 3px solid ${colors.text_black}; outline-offset: 4px; }
`;

export default function ProjectPreviewCard({ title, image, description, to }) {
  const [revealed, setRevealed] = useState(false);
  const { theme } = useTheme();
  return (
    <Container data-revealed={revealed} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setRevealed(false);
    }}>
      <ProjectCard $mode={theme}>
        <Front type="button" aria-label={`Show ${title} details`} onClick={() => setRevealed(true)}>
          <span>{title}</span>
          <img src={image} alt="" />
        </Front>
        <ProjectBack>
          <p>{description}</p>
          <Action as={Link} to={to} $bgColor={colors.bg_white} aria-label={`View more about ${title}`}>
            View More
          </Action>
        </ProjectBack>
      </ProjectCard>
    </Container>
  );
}
