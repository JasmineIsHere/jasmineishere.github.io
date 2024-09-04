import { ButtonContainer } from "./styles";

const PrimaryButton = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default PrimaryButton;
