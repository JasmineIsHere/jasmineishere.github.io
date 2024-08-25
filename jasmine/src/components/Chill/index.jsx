import React from "react";
import { Body, Girl, Heading, Picture, ChillContainer } from "./styles";

const Chill = () => {
  return (
    <ChillContainer>
      <Heading>About Me</Heading>
      <Body>
        I am Software Engineer based in Singapore, with experience in developing
        web applications and chatbots. I am interested in creating user-friendly
        applications and I am always looking for opportunities to learn and
        grow. When I am not coding, I am just a <Girl>girl</Girl>✨ that wishes
        to be a stone in her next life.
      </Body>
      <Picture src="/pug_loaf.jpg" alt="pug loaf" />
    </ChillContainer>
  );
};

export default Chill;
