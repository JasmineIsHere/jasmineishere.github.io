import Navigation from "../Navigation";
import ThemeSwitch from "../ThemeSwitch";
import { ContentContainer, Page } from "./styles";

const PageContainer = ({ children }) => {
  return (
    <Page>
      <Navigation />
      <ContentContainer>
        <ThemeSwitch>
        {children}
        </ThemeSwitch>
      </ContentContainer>
    </Page>
  );
};

export default PageContainer;
