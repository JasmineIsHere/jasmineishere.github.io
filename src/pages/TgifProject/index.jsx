import { Link } from "react-router-dom";
import styled from "styled-components";
import BodyText from "../../components/BodyText";
import HeadingText from "../../components/HeadingText";
import ProjectContainer from "../../components/ProjectContainer";
import { Heading } from "../../components/HeadingText/styles";
import { ButtonContainer } from "../../components/PrimaryButton/styles";

const Content = styled.article`
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  section { display: flex; flex-direction: column; gap: 1rem; }
  figure { margin: 0; }
  img { display: block; width: 100%; height: auto; border-radius: 20px; }
  figcaption { font: 1rem/1.5 "Open Sans", sans-serif; margin-top: 0.75rem; }
  a:focus-visible { outline: 3px solid currentColor; outline-offset: 5px; }
  @media (max-width: 768px) {
    section > div { text-align: left; }
  }
  @media (prefers-reduced-motion: reduce) { a { transition: none; } }
`;
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Action = styled(ButtonContainer)`
  text-align: center;
  padding: 0.3rem 1.5rem;
  margin: 0;
`;
const SectionHeading = ({ children }) => <Heading as="h2" $size="small">{children}</Heading>;

export default function TgifProject() {
  return (
    <ProjectContainer>
      <Content>
        <HeadingText>TGIF Screensaver</HeadingText>
        <BodyText>A little countdown to Friday, and a reminder to enjoy the weekend while it lasts.</BodyText>
        <figure>
          <img src="/projects/tgif/work-week.png" alt="Dark flip clock showing TIME UNTIL TGIF with days, hours, minutes and seconds remaining" />
          <figcaption>The work week view, counting down to Friday's finish time.</figcaption>
        </figure>
        <section>
          <SectionHeading>Background</SectionHeading>
          <BodyText>
            Is it the weekend yet? This time, the countdown lives on your Mac.
            TGIF Screensaver shows how long is left until the end of work on Friday,
            using a retro flip clock like the ones on airport departure boards.
            Once the weekend starts, it switches to counting down to Monday at midnight.
          </BodyText>
          <BodyText>
            Not everyone finishes work at 6pm, so the Friday cutoff can be changed
            in the screensaver options. The countdown uses your local timezone,
            and the setting is saved for next time.
          </BodyText>
        </section>
        <section>
          <SectionHeading>Tech Stack</SectionHeading>
          <BodyText>
            Swift and Foundation handle the date calculations, while SwiftUI draws
            the clock and animates each digit. AppKit and ScreenSaver.framework
            connect the SwiftUI views to macOS. ScreenSaverDefaults stores the
            Friday finish hour, and a Swift Package keeps the countdown logic
            testable on its own.
          </BodyText>
        </section>
        <section>
          <SectionHeading>Process</SectionHeading>
          <BodyText>
            The countdown calculation is kept separate from the display. It takes
            a date and the Friday finish hour, works out whether it is the work
            week or weekend, and returns the time remaining. This makes it possible
            to test moments like the exact Friday cutoff without waiting for the
            clock to reach them.
          </BodyText>
          <BodyText>
            Each flip digit is made from four layers. The old digit's top half
            folds away, then the new digit's bottom half folds into place. The
            two movements take 0.3 seconds in total, giving the clock its mechanical feel.
          </BodyText>
          <BodyText>
            To make it work as a native screensaver, an NSHostingView embeds the
            SwiftUI clock inside a ScreenSaverView. The clock updates once a second,
            and a settings sheet lets you choose the hour when your Friday ends.
          </BodyText>
        </section>
        <section>
          <SectionHeading>Weekend mode</SectionHeading>
          <figure>
            <img src="/projects/tgif/weekend.png" loading="lazy" alt="Light flip clock showing WEEKEND ENDS IN with the time remaining until Monday" />
            <figcaption>The weekend view switches to a light background and counts down to Monday at 00:00.</figcaption>
          </figure>
        </section>
        <section>
          <SectionHeading>Try it on your Mac</SectionHeading>
          <BodyText>
            This is a native macOS screensaver, so it needs to be installed rather
            than opened in a browser. The release build is for Apple Silicon Macs
            running macOS Ventura (13) or later. Intel Macs need a build from source.
            The repository includes installation instructions and the source code.
          </BodyText>
          <Actions>
            <Action as="a" href="https://github.com/JasmineIsHere/tgif-screensaver/releases/tag/v1.0.0" target="_blank" rel="noreferrer">Get the screensaver</Action>
            <Action as="a" href="https://github.com/JasmineIsHere/tgif-screensaver" target="_blank" rel="noreferrer">View on GitHub</Action>
          </Actions>
        </section>
        <section>
          <SectionHeading>Upcoming TO-DOs (Hopefully)</SectionHeading>
          <BodyText>
            A long weekend or a trip to Japan would be even more fun to count down to.
            Calendar integration is still in the design stage, with the idea of
            counting down to holidays and vacation plans instead of just Friday.
          </BodyText>
        </section>
        <Actions><Action as={Link} to="/">Back to projects</Action></Actions>
      </Content>
    </ProjectContainer>
  );
}
