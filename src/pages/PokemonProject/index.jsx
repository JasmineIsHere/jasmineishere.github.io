import BodyText from "../../components/BodyText";
import HeadingText from "../../components/HeadingText";
import PokemonCard from "../../components/PokemonCard";
import ProjectContainer from "../../components/ProjectContainer";

const PokemonProject = () => {
  return (
    <ProjectContainer>
      <HeadingText>A self-intro card inspired by Pokemon</HeadingText>
      <BodyText>Just something I wanted to try for fun after going back to play Fire Red for a while.
        Feel free to click on the tabs or use the left and right arrow keys to navigate through the card.
        Unfortunately, I haven't got it to be mobile-responsive yet, so this is best viewed on laptop. Enjoy!</BodyText>
      <br />
      <PokemonCard />
    </ProjectContainer>
  );
}

export default PokemonProject;