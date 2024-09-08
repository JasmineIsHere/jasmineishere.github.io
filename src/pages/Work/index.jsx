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
  TechStackPopover,
  WorkContainer,
} from "./styles";
import HeadingText from "../../components/HeadingText";
import { Popover } from "antd";

const Work = () => {
  const techStack = {
    Java: {
      backgroundColor: colors.java,
      hoverText: (
        <TechStackPopover>
          One of the first languages that I picked up since university and
          probably the one I am most comforable at.
        </TechStackPopover>
      ),
    },
    Go: {
      backgroundColor: colors.go,
      hoverText: (
        <TechStackPopover>
          Go was something I quickly picked up in my first job and I have been
          using it for the past 2 years.
        </TechStackPopover>
      ),
    },
    React: {
      backgroundColor: colors.react,
      hoverText: (
        <TechStackPopover>
          Not a language but a framework that I recently learned while training
          myself to be a full-stack developer. Currently, almost all of my
          frontend experience is with React.
        </TechStackPopover>
      ),
    },
    SQL: {
      backgroundColor: colors.mysql,
      hoverText: (
        <TechStackPopover>
          I often work with relational databases like MySQL and TiDB when
          developing backend services so I am familiar with writing SQL queries
          and designing database schemas.
        </TechStackPopover>
      ),
    },
    Others: {
      backgroundColor: colors.others,
      hoverText: (
        <TechStackPopover>
          Other than the key ones listed, I worked with different tools as a
          software engineer such as Kafka (messaging queue), Redis (cache),
          Mixpanel (FE analytics), Bamboo (CI/CD), etc to meet the varying needs
          of the project I am tasked with.
        </TechStackPopover>
      ),
    },
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
            <Popover content={techStack[tech].hoverText}>
              <TechStackButton
                key={tech}
                $bgColor={techStack[tech].backgroundColor}
              >
                {tech}
              </TechStackButton>
            </Popover>
          ))}
        </TechStackContainer>
      </SectionContainer>
      <SectionContainer>
        <HeadingText>Projects</HeadingText>
        <SubHeading>Ninja Van</SubHeading>
        <ProjectCardsContainer>
          <CardContainer>
            <ProjectCard $mode={theme}>
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
            <ProjectCard $mode={theme}>
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
            <ProjectCard $mode={theme}>
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
