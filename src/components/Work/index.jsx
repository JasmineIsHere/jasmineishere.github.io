import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { colors } from "../../utils/colors";
import {
  CardContainer,
  Heading,
  ProjectBack,
  ProjectCard,
  ProjectCardsContainer,
  ProjectImg,
  SectionContainer,
  SubHeadingContainer,
  SubHeadingLine,
  SubHeadingText,
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
  const onProjectClick = (projectPath) => {
    navigate(`/projects/${projectPath}`);
  };

  const SubHeading = ({ children }) => (
    <SubHeadingContainer>
      <SubHeadingText>{children}</SubHeadingText>
      <SubHeadingLine $mode={theme} />
    </SubHeadingContainer>
  );

  return (
    <WorkContainer>
      <SectionContainer>
        <Heading>Tech Stack</Heading>
        <TechStackContainer>
          {Object.keys(techStack).map((tech) => (
            <TechStackButton key={tech} $bgColor={techStack[tech]}>
              {tech}
            </TechStackButton>
          ))}
        </TechStackContainer>
      </SectionContainer>
      <SectionContainer>
        <Heading>Projects</Heading>
        <SubHeading>Ninja Van</SubHeading>
        <ProjectCardsContainer>
          <CardContainer>
            <ProjectCard
              $mode={theme}
              onClick={() => onProjectClick("nvSupportPg")}
            >
              <ProjectImg
                src="/nv_support_page_categories.png"
                alt="Ninja Van Support Page Revamp SS"
              />
              <ProjectBack
                $bgColor={colors.ninjaRed}
                $color={colors.text_white}
              >
                Revamped Ninja Van support page
              </ProjectBack>
            </ProjectCard>
          </CardContainer>
          <CardContainer>
            <ProjectCard
              $mode={theme}
              onClick={() => onProjectClick("ninjachat")}
            >
              <ProjectImg src="/ninjachat.png" alt="NinjaChat SS" />
              <ProjectBack
                $bgColor={colors.ninjaRed}
                $color={colors.text_white}
              >
                Implemented new flows for Ninja Chat
              </ProjectBack>
            </ProjectCard>
          </CardContainer>
          <CardContainer>
            <ProjectCard $mode={theme} onClick={() => onProjectClick("c2c")}>
              <ProjectImg src="/ninjachat.png" alt="Consignee to Consignee" />
              <ProjectBack
                $bgColor={colors.ninjaRed}
                $color={colors.text_white}
              >
                Kickstarted the proof of concept for Ninja Flexi
              </ProjectBack>
            </ProjectCard>
          </CardContainer>
        </ProjectCardsContainer>
        <SubHeading>Personal</SubHeading>
        {/* <ProjectCard $mode={theme} onClick={() => onProjectClick("pkCard")}>
        <img src="/pk_resume.png" alt="Pokemon Style Portfolio SS" />
      </ProjectCard> */}

        <SubHeading>School</SubHeading>
        {/* TODO */}
      </SectionContainer>
    </WorkContainer>
  );
};

export default Work;
