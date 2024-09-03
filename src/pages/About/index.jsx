import React, { useState } from "react";
import { ChillContainer, StyledText, VideoContainer } from "./styles";
import HeadingText from "../../components/HeadingText";
import BodyText from "../../components/BodyText";

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
      <div onMouseLeave={pauseVideo}>
        <HeadingText>About Me</HeadingText>
        <BodyText>
          I am Software Engineer based in Singapore, with experience in
          developing web applications and chatbots. I am interested in creating
          user-friendly applications and I am always looking for opportunities
          to learn and grow. When I am not coding or sleep-deprived, I might be
          reading, cooking, watching shows, rollerblading, painting, 3D
          printing, travelling, sewing, swimming, candle making, and probably a
          lot more{" "}
          <StyledText $italic>
            *cues{" "}
            <StyledText
              onMouseOver={showVideoOnHover}
              onClick={showVideoOnHover}
              $pointer
              $bold
              $italic
            >
              Mediocrity City
            </StyledText>
            *
          </StyledText>
          .
        </BodyText>
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
      </div>
    </ChillContainer>
  );
};

export default About;
