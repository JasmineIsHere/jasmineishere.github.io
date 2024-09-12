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

  const projects = {
    "Ninja Van": [
      {
        imgSrc: "/nv_support_page_categories.png",
        altText: "Ninja Van Support Page Revamp SS",
        bgColor: colors.ninjaRed,
        textColor: colors.text_white,
        text: "Revamped Ninja Van support page",
      },
      {
        imgSrc: "/ninjachat.png",
        altText: "NinjaChat SS",
        bgColor: colors.ninjaRed,
        textColor: colors.text_white,
        text: "Implemented new flows for Ninja Chat",
      },
      {
        imgSrc: "/ninja_flexi.png",
        altText: "Ninja Flexi SS",
        bgColor: colors.ninjaRed,
        textColor: colors.text_white,
        text: "Kickstarted the proof of concept for Ninja Flexi",
      },
    ],
    "Personal": [
      {
        imgSrc: "/pk_resume.png",
        altText: "Pokemon Style Portfolio SS",
        bgColor: colors.btn_bg_grey,
        textColor: colors.text_black,
        text: "An interactive portfolio styled like a Pokemon info menu",
        onClick: () => onProjectClick("pkCard"),
      },
    ],
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
        {
          Object.keys(projects).map((projectType) => (
            <>
              <SubHeading>{projectType}</SubHeading>
              <ProjectCardsContainer>
                {projects[projectType].map((project) => (
                  <CardContainer>
                    <ProjectCard onClick={project.onClick}>
                      <ProjectImg
                        src={project.imgSrc}
                        alt={project.altText}
                      />
                    </ProjectCard>
                  </CardContainer>
                ))}
              </ProjectCardsContainer>
            </>
          ))
        }
      </SectionContainer>
    </WorkContainer>
  );
};

export default Work;
