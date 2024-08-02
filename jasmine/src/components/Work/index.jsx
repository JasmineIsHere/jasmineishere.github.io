import { useState } from "react";
import {
  CardContainer,
  LabelText,
  Label,
  TextFieldContainer,
  LevelText,
  Level,
  Lv,
  ProfileIcon,
  ProfileIconContainer,
  LeftProfileContainer,
  TextField,
  RowsContainer,
  StyledType,
  HorizontalContainer,
  TextAreaContainer,
  TextArea,
  LineBreak,
  HeaderContainer,
  PaginationBar,
  Container,
  PaginationDot,
  SelectedPaginationBar,
  PaginationBarText,
} from "./styles";

const Row = ({ label, value }) => {
  return (
    <TextFieldContainer>
      <Label>
        <LabelText>{label}</LabelText>
      </Label>
      <TextField>{value}</TextField>
    </TextFieldContainer>
  );
};

const Work = () => {
  const level = new Date().getFullYear() - 2000;
  const [leftPaginationTabs, setLeftPaginationTabs] = useState(["DEVELOPER INFO"]);
  const [rightPaginationTabs, setRightPaginationTabs] = useState(["DEVELOPER SKILLS", "KNOWN MOVES"]);
  const [currPaginationTab, setCurrPaginationTab] = useState(1);

  function onPaginationTabChange(index) {
    setCurrPaginationTab(index);
    if (index === 1) {
      setLeftPaginationTabs(["DEVELOPER INFO"]);
      setRightPaginationTabs(["DEVELOPER SKILLS", "KNOWN MOVES"]);
    } else if (index === 2) {
      setLeftPaginationTabs(["DEVELOPER INFO", "DELVELOPER SKILLS"]);
      setRightPaginationTabs(["KNOWN MOVES"]);
    } else {
      setLeftPaginationTabs(["DEVELOPER INFO", "DEVELOPER SKILLS", "KNOWN MOVES"]);
      setRightPaginationTabs([]);
    }
  }

  return (
    <Container>
      <CardContainer>
        <HeaderContainer>
          <PaginationBar>
            <SelectedPaginationBar>
              <PaginationBarText>
                {leftPaginationTabs[currPaginationTab - 1]}
              </PaginationBarText>
              {
                leftPaginationTabs.map((tab, index) => (
                  <PaginationDot
                    key={index}
                    position={index + 1 - currPaginationTab}
                    onClick={() => onPaginationTabChange(index + 1)}
                  />
                ))
              }
            </SelectedPaginationBar>
            {
              rightPaginationTabs.map((tab, index) => (
                <PaginationDot
                  key={index}
                  position={index + leftPaginationTabs.length + 1}
                  onClick={() => onPaginationTabChange(index + currPaginationTab + 1)}
                />
              ))
            }
          </PaginationBar>
        </HeaderContainer>
        <HorizontalContainer>
          <LeftProfileContainer>
            <Level>
              <LevelText>
                <Lv>Lv</Lv>
                {level}
              </LevelText>
              <LevelText>JAS</LevelText>
            </Level>
            <ProfileIconContainer>
              <ProfileIcon
                src="/gennair.png"
                alt="https://japeal.com/pkm?efc=cDE9OTRAcDI9MTQ4QHNzPTBAYzE9cmdiKDE0OCwxMTUsMTgwKUBjMj1yZ2IoMjIyLDIxMywyMjIpQGMzPXJnYig2NSw5MCwyNTUpQGM0PXJnYigwLDAsMClAYzU9cmdiKDAsMCwwKQ=="
              />
            </ProfileIconContainer>
          </LeftProfileContainer>
          <RowsContainer>
            <Row label="NAME" value="JASMINE" />
            <TextFieldContainer>
              <Label>
                <LabelText>TYPE</LabelText>
              </Label>
              <TextField>
                <StyledType $backgroundColor="#7f68e6">DRAGON</StyledType>
              </TextField>
            </TextFieldContainer>
            <Row label="MBTI" value="INFP" />
            <Row label="SIGN" value="VIRGO" />
            <Row label="NATL" value="SINGAPORE" />
          </RowsContainer>
        </HorizontalContainer>
        <TextAreaContainer>
          <Label>
            <LabelText>SELF MEMO</LabelText>
          </Label>
          <TextArea>
            CALM nature. <LineBreak />
            Graduated from SMU in 2022.
            <LineBreak />
            <br />
          </TextArea>
        </TextAreaContainer>
      </CardContainer>
    </Container>
  );
};

export default Work;
