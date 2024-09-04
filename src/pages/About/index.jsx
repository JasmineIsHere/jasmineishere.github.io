import React, { useState } from "react";
import {
  SectionContainer,
  ChillContainer,
  VideoContainer,
} from "./styles";
import HeadingText from "../../components/HeadingText";
import BodyText from "../../components/BodyText";
import PrimaryButton from "../../components/PrimaryButton";
import { PlayCircleOutlined } from "@ant-design/icons";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const showVideoOnHover = () => {
    setShowVideo(true);
  };
  const pauseVideo = () => {
    setShowVideo(false);
  };
  return (
    <ChillContainer>
      <SectionContainer onMouseLeave={pauseVideo}>
        <HeadingText>About Me</HeadingText>
        <BodyText>
          I am Software Engineer based in Singapore, with experience in
          developing web applications and chatbots. I am interested in creating
          user-friendly applications and I am always looking for opportunities
          to learn and grow. When I am not coding or sleep-deprived, I might be
          reading, cooking, watching shows, rollerblading, painting, 3D
          printing, travelling, sewing, swimming, candle making, and probably a
          lot more.
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
        <HeadingText>Personality</HeadingText>
        <BodyText>
          As a INFP, I have the Introverted, Intuitive, Feeling,
          and Prospecting traits. I am more of a listener than a speaker because
          I find it more interesting to hear people’s thoughts and stories. I am
          more of a explorer than a settler because the world is filled with so
          many interesting things that it seems like a pity to focus on only one
          thing for life. I am more empathetic than logical because people
          matter more to me than facts.
        </BodyText>
        <PrimaryButton>
          <a
            href="https://www.16personalities.com/infp-personality"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        </PrimaryButton>
      </SectionContainer>

    </ChillContainer>
  );
};

export default About;
