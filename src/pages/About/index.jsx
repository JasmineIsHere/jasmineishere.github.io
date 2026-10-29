import React, { useState } from "react";
import CertificationBadges from "../../components/CertificationBadges";
import {
  SectionContainer,
  ChillContainer,
  VideoContainer,
  TimelineHeadingText,
  StyledTimeline,
  TimelineBodyText,
  ArtworkFooter,
} from "./styles";
import HeadingText from "../../components/HeadingText";
import BodyText from "../../components/BodyText";
import PrimaryButton from "../../components/PrimaryButton";
import {
  InfoCircleOutlined,
  PlayCircleOutlined,
  SmileFilled,
} from "@ant-design/icons";
import { colors } from "../../utils/colors";
import { Tooltip } from "antd";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const showVideoOnHover = () => {
    setShowVideo(true);
  };
  const pauseVideo = () => {
    setShowVideo(false);
  };
  return (
    <>
      <ChillContainer>
        <SectionContainer onMouseLeave={pauseVideo}>
          <HeadingText>About Me</HeadingText>
          <BodyText>
            I am Software Engineer based in Singapore, with experience in
            developing web applications and chatbots. I am interested in
            creating user-friendly applications and I am always looking for
            opportunities to learn and grow. When I am not coding or
            sleep-deprived, I might be reading, cooking, watching shows,
            rollerblading, painting, 3D printing, travelling, sewing, swimming,
            candle making, and probably a lot more.
          </BodyText>
          <PrimaryButton
            onClick={showVideoOnHover}
            onMouseOver={showVideoOnHover}
            $padding="0.5rem 2rem"
          >
            <PlayCircleOutlined /> Cue music
          </PrimaryButton>
          {showVideo && (
            <VideoContainer
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bYlVAptmHtg?&autoplay=1"
              title="Mediocrity City"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></VideoContainer>
          )}
        </SectionContainer>
        <SectionContainer>
          <HeadingText>Education</HeadingText>
          <StyledTimeline
            $lineColor={colors.btn_bg_grey}
            items={[
              {
                dot: <SmileFilled />,
                color: colors.switch_yellow,
                children: (
                  <>
                    <TimelineHeadingText>
                      Singapore Management University
                    </TimelineHeadingText>
                    <TimelineBodyText>
                      Bachelor of Science (Computer Science)
                      <span> </span>
                      <Tooltip placement="right" title="GPA: 3.46">
                        <InfoCircleOutlined />
                      </Tooltip>
                      <br />
                      Aug 2019 - Dec 2022
                    </TimelineBodyText>
                  </>
                ),
              },
              {
                color: colors.switch_yellow,
                children: (
                  <>
                    <TimelineHeadingText>
                      Pioneer Junior College
                    </TimelineHeadingText>
                    <TimelineBodyText>
                      GCE A Level
                      <br />
                      2017 - 2018
                    </TimelineBodyText>
                  </>
                ),
              },
              {
                color: colors.switch_yellow,
                children: (
                  <>
                    <TimelineHeadingText>
                      Jurong Secondary School
                    </TimelineHeadingText>
                    <TimelineBodyText>
                      GCE O Level
                      <br />
                      2013 - 2016
                    </TimelineBodyText>
                  </>
                ),
              },
              {
                color: colors.switch_yellow,
                children: (
                  <>
                    <TimelineHeadingText>
                      Juying Primary School
                    </TimelineHeadingText>
                    <TimelineBodyText>
                      PSLE
                      <br />
                      2007 - 2012
                    </TimelineBodyText>
                  </>
                ),
              },
            ]}
          ></StyledTimeline>
        </SectionContainer>
        <SectionContainer>
          <HeadingText>Other Certifications</HeadingText>
          <CertificationBadges />
        </SectionContainer>
      </ChillContainer>
      <ArtworkFooter>
        <img src="/footer.png" alt="" width="3664" height="400" />
      </ArtworkFooter>
    </>
  );
};

export default About;
