import React from "react";
import {
  BodyDiv,
  Container,
  Girl,
  TitleDiv,
  Title,
  Picture,
  TextContainer,
  HorizontalContainer,
  Button,
  ButtonsContainer,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <HorizontalContainer>
        <TextContainer>
          <TitleDiv>
            <p>Hello, I am</p>
            <Title>Jasmine Tan</Title>
          </TitleDiv>
          <BodyDiv>
            <p>
              I am Software Engineer based in Singapore, with experience in
              developing web applications and chatbots. I am interested in
              creating user-friendly applications and I am always looking for
              opportunities to learn and grow. When I am not coding, I am just a{" "}
              <Girl>girl</Girl>✨ that wishes to be a stone in her next life.
            </p>
          </BodyDiv>
          <ButtonsContainer>
            <Button>
              <a
                href="https://www.linkedin.com/in/jasmine-tan-jm/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button>
              <a href="/Resume.pdf" download>
                Resume
              </a>
            </Button>
          </ButtonsContainer>
        </TextContainer>
        <Picture src="/pug_loaf.jpg" alt="pug loaf" />
      </HorizontalContainer>
    </Container>
  );
};

export default Home;
