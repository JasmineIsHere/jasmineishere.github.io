import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { colors } from "../../utils/colors";
import {
  CardContainer,
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
import HeadingText from "../../components/HeadingText";

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
        <HeadingText>Tech Stack</HeadingText>
        <TechStackContainer>
          {Object.keys(techStack).map((tech) => (
            <TechStackButton key={tech} $bgColor={techStack[tech]}>
              {tech}
            </TechStackButton>
          ))}
        </TechStackContainer>
      </SectionContainer>
      <SectionContainer>
        <HeadingText>Projects</HeadingText>
        <SubHeading>Ninja Van</SubHeading>
        <ProjectCardsContainer>
          <CardContainer>
            <ProjectCard
              $mode={theme}
              // onClick={() => onProjectClick("nvSupportPg")}
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
              // onClick={() => onProjectClick("ninjachat")}
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
            <ProjectCard
              $mode={theme}
              // onClick={() => onProjectClick("c2c")}
            >
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
        <ProjectCardsContainer>
          <CardContainer>
            <ProjectCard $mode={theme} onClick={() => onProjectClick("pkCard")}>
              <ProjectImg
                src="/pk_resume.png"
                alt="Pokemon Style Portfolio SS"
              />
              <ProjectBack
                $bgColor={colors.btn_bg_grey}
                $color={colors.text_black}
              >
                An interactive portfolio styled like a Pokemon info menu
              </ProjectBack>
            </ProjectCard>
          </CardContainer>
        </ProjectCardsContainer>

        {/* <SubHeading>School</SubHeading> */}
        {/* TODO */}
      </SectionContainer>
    </WorkContainer>
  );
};

export default Work;