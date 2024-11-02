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
import PrimaryButton from "../../components/PrimaryButton";

const Work = () => {
  const techStack = {
    Java: {
      backgroundColor: colors.java_orange,
      hoverText: (
        <TechStackPopover>
          One of the first languages that I picked up since university and
          probably the one I am most comforable at.
        </TechStackPopover>
      ),
    },
    Go: {
      backgroundColor: colors.go_turq,
      hoverText: (
        <TechStackPopover>
          Go was something I quickly picked up in my first job and I have been
          using it for the past 2 years.
        </TechStackPopover>
      ),
    },
    React: {
      backgroundColor: colors.react_mint,
      hoverText: (
        <TechStackPopover>
          Not a language but a framework that I recently learned while training
          myself to be a full-stack developer. Currently, almost all of my
          frontend experience is with React.
        </TechStackPopover>
      ),
    },
    SQL: {
      backgroundColor: colors.mysql_blue,
      hoverText: (
        <TechStackPopover>
          I often work with relational databases like MySQL and TiDB when
          developing backend services so I am familiar with writing SQL queries
          and designing database schemas.
        </TechStackPopover>
      ),
    },
    Others: {
      backgroundColor: colors.others_pink,
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
    Personal: [
      {
        imgSrc: "/pk_resume.png",
        altText: "Pokemon Style Portfolio SS",
        bgColor: colors.btn_bg_grey,
        textColor: colors.text_black,
        text: "An interactive portfolio styled like a Pokemon info menu",
        onClick: () => onProjectClick("pkCard"),
      },
      {
        imgSrc: "/yt_downloader.png",
        altText: "Youtube Downloader SS",
        bgColor: colors.btn_bg_grey,
        textColor: colors.text_black,
        text: "A YouTube downloader that allows users to download videos and audio from YouTube",
        onClick: () =>
          onProjectClick(
            "https://github.com/JasmineIsHere/yt-downloader",
            true
          ),
      },
      {
        imgSrc: "/shiggy_game_inspo.png",
        altText: "Shigaraki Game SS",
        bgColor: colors.btn_bg_grey,
        textColor: colors.text_black,
        text: "Inspired by the Chrome Dino Game, but with Shigaraki Tomura from My Hero Academia",
        onClick: () => onProjectClick("shiggy"),
      },
    ],
    "Ninja Van": [
      {
        imgSrc: "/nv_support_page_categories.png",
        altText: "Ninja Van Support Page Revamp SS",
        bgColor: colors.ninja_red,
        textColor: colors.text_white,
        text: "Created new components to support the marketing team’s goals to revamp the support page and improve usefulness of the new support page to reduce agents’ contact point. Integrated new data points with the new page so that the team is also able to monitor the website’s performance through Google Analytics.",
      },
      {
        imgSrc: "/ninjachat.png",
        altText: "NinjaChat SS",
        bgColor: colors.ninja_red,
        textColor: colors.text_white,
        text: "Created new flows for the customer support chatbot as well as maintained and supported the usage of existing features of the chatbot especially during high traffic periods.",
      },
      {
        imgSrc: "/ninja_flexi.png",
        altText: "Ninja Flexi SS",
        bgColor: colors.ninja_red,
        textColor: colors.text_white,
        text: "Designed a microsite for anyone to try out Ninja Van’s delivery service without having to sign up as a shipper but still able to enjoy special features such as pickup from doorstep and parcel status updates. ",
      },
    ],
  };

  const { theme } = useTheme();

  const navigate = useNavigate();
  const onProjectClick = (path, isExternalLink = false) => {
    if (isExternalLink) {
      window.open(path, "_blank");
      return;
    } else {
      navigate(`/projects/${path}`);
    }
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
        {Object.keys(projects).map((projectType) => (
          <>
            <SubHeading>{projectType}</SubHeading>
            <ProjectCardsContainer>
              {projects[projectType].map((project) => (
                <CardContainer>
                  <ProjectCard>
                    <ProjectImg src={project.imgSrc} alt={project.altText} />
                    <ProjectBack
                      $bgColor={project.bgColor}
                      $textColor={project.textColor}
                    >
                      <p>{project.text}</p>
                      {project.onClick && (
                        <PrimaryButton
                          $bgColor={colors.bg_white}
                          onClick={project.onClick}
                        >
                          View More
                        </PrimaryButton>
                      )}
                    </ProjectBack>
                  </ProjectCard>
                </CardContainer>
              ))}
            </ProjectCardsContainer>
          </>
        ))}
      </SectionContainer>
    </WorkContainer>
  );
};

export default Work;
