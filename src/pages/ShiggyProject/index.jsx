import { Link as ScrollLink, Element } from "react-scroll";
import BodyText from "../../components/BodyText";
import HeadingText from "../../components/HeadingText";
import PrimaryButton from "../../components/PrimaryButton";
import ProjectContainer from "../../components/ProjectContainer";
import { ButtonsContainer, ListItem } from "./styles";
import { colors } from "./../../utils/colors";

const ShiggyProject = () => {
  return (
    <ProjectContainer>
      <HeadingText>Shigaraki Game</HeadingText>
      <HeadingText size="small">Background</HeadingText>
      <img
        width="70%"
        src="shiggy_game_inspo.png"
        alt="https://www.instagram.com/p/CNLCKRVF75d/?utm_source=ig_web_copy_link"
      />
      <BodyText>
        The idea came from a post I came across and I really wanted to try
        making it but this was before I learned anything about frontend
        development or game development so it is a very simple implementation
        using only HTML, CSS, and JavaScript.
      </BodyText>
      <ButtonsContainer>
        <PrimaryButton $outline={`4px dotted ${colors.btn_bg_grey_hover}`}>
          <a
            href="https://jasmineishere.github.io/shigaraki_game/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Play here
          </a>
        </PrimaryButton>
        <PrimaryButton>
          <ScrollLink to="process" smooth duration>
            Learn more about the process
          </ScrollLink>
        </PrimaryButton>
      </ButtonsContainer>
      <br />
      <Element name="process">
        <HeadingText size="small">Version 1</HeadingText>
      </Element>
      <video width="70%" autoPlay loop controls>
        <source src="shiggy_v1.mp4" type="video/mp4" />
      </video>
      <BodyText>
        In the first version, the aim was to get the basic mechanics of the game
        working. This includes generating the moving obstacles, implementing
        character movement, and collision detection. With some Photoshop and
        existing assets on the Internet, I was able to put together a simple
        game.
      </BodyText>
      <HeadingText size="small">Version 2</HeadingText>
      <video width="70%" autoPlay loop controls>
        <source src="shiggy_v2.mp4" type="video/mp4" />
      </video>
      <BodyText>
        In the second version, improvements were made in terms of the game's
        aesthetics and the addition of a scoring system. More screens were also
        added to the game to provide a better user experience.
      </BodyText>
      <HeadingText size="small">Upcoming TO-DOs (Hopefully)</HeadingText>
      <ul>
        <ListItem>
          Increase difficulty by increasing the speed of the obstacles over time
        </ListItem>
        <ListItem>Add music and sound effects</ListItem>
        <ListItem>Randomize obstacles to generate</ListItem>
      </ul>
      <BodyText>
        As the project is made using only HTML, CSS, and JavaScript, it will be
        hard to maintain and scale the project to include too many features. For
        now, the list of upcoming improvements will be kept minimal until the
        prospect of rewriting the project in a more maintainable way is
        considered.
      </BodyText>
    </ProjectContainer>
  );
};

export default ShiggyProject;
