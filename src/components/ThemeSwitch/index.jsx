import { useTheme } from "../../contexts/ThemeContext";
import { Container, LightSwitch, LightSwitchContainer } from "./styles";

const ThemeSwitch = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  let soundEffect = new Audio("/click.mp3");

  const onSwitchClick = () => {
    soundEffect.play();
    toggleTheme();
  };

  return (
    <Container $mode={theme}>
      <LightSwitchContainer>
        <audio id="audio" src="/switch.mp3" />
        <LightSwitch
          src="/switch.png"
          alt="lightbulb"
          width="40rem"
          onClick={onSwitchClick}
        />
      </LightSwitchContainer>
      {children}
    </Container>
  );
};

export default ThemeSwitch;
