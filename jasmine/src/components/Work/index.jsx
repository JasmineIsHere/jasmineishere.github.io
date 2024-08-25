import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { colors } from "../../utils/colors";
import {
  Heading,
  ProjectCard,
  TechStackButton,
  TechStackContainer,
  WorkContainer,
} from "./styles";

const Work = () => {
  const techStack = {
    Java: colors.java,
    Go: colors.go,
    React: colors.react,
    MySQL: colors.mysql,
    Others: colors.others,
  };

  const { theme } = useTheme();

  const navigate = useNavigate();
  const onProjectClick = () => {
    navigate("/pkCard");    
  }
  return (
    <WorkContainer>
      <Heading>Tech Stack</Heading>
      <TechStackContainer>
        {Object.keys(techStack).map((tech) => (
          <TechStackButton key={tech} $bgColor={techStack[tech]}>
            {tech}
          </TechStackButton>
        ))}
      </TechStackContainer>

      <Heading>Projects</Heading>
      <ProjectCard $mode={theme} onClick={onProjectClick}>
        <img src="/pk_resume.png" alt="Project 1"/>
      </ProjectCard>
    </WorkContainer>
  );
};

export default Work;
