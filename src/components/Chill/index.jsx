import React, { useRef, useState } from "react";
import {
  Body,
  Heading,
  ChillContainer,
  StyledText,
  InteractiveText,
} from "./styles";

const Chill = () => {
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
        <Heading>About Me</Heading>
        <Body>
          I am Software Engineer based in Singapore, with experience in
          developing web applications and chatbots. I am interested in creating
          user-friendly applications and I am always looking for opportunities
          to learn and grow. When I am not coding or sleep-deprived, I might be
          reading, cooking, watching shows, rollerblading, painting, 3D
          printing, travelling, sewing, swimming, candle making, and probably a
          lot more{" "}
          <StyledText $italic $fontSize="1.5rem">
            *cues{" "}
            <StyledText onMouseOver={showVideoOnHover} $pointer $bold $italic $color='#ff8888'>
              Mediocrity City
            </StyledText>
            *
          </StyledText>
          .
        </Body>
        {showVideo && (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bYlVAptmHtg?&autoplay=1"
            title="Mediocrity City"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </ChillContainer>
  );
};

export default Chill;
