import { useEffect, useState } from "react";
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
  MovesContainer,
  MoveContainer,
  MoveType,
  Move,
  RightContainer,
  SkillTextField,
  SkillTextFieldContainer,
  AbilityTextField,
  AbilityTextFieldContainer,
  MoveText,
  MoveSet,
  PP,
} from "./styles";

const InfoRow = ({ label, value }) => {
  return (
    <TextFieldContainer>
      <Label>
        <LabelText>{label}</LabelText>
      </Label>
      <TextField tabIndex="1">{value}</TextField>
    </TextFieldContainer>
  );
};

const SkillRow = ({ label, value }) => {
  return (
    <SkillTextFieldContainer>
      <Label>
        <LabelText>{label}</LabelText>
      </Label>
      <SkillTextField>{value}</SkillTextField>
    </SkillTextFieldContainer>
  );
};

const PokemonCard = () => {
  const level = new Date().getFullYear() - 2000;
  const [leftPaginationTabs, setLeftPaginationTabs] = useState([
    "DEVELOPER INFO",
  ]);
  const [rightPaginationTabs, setRightPaginationTabs] = useState([
    "DEVELOPER SKILLS",
    "KNOWN MOVES",
  ]);
  const [currPaginationTab, setCurrPaginationTab] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setCurrPaginationTab((prevTab) => Math.max(prevTab - 1, 1));
      } else if (event.key === "ArrowRight") {
        setCurrPaginationTab((prevTab) => Math.min(prevTab + 1, 3));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  useEffect(() => {
    if (currPaginationTab === 1) {
      setLeftPaginationTabs(["DEVELOPER INFO"]);
      setRightPaginationTabs(["DEVELOPER SKILLS", "KNOWN MOVES"]);
    } else if (currPaginationTab === 2) {
      setLeftPaginationTabs(["DEVELOPER INFO", "DEVELOPER SKILLS"]);
      setRightPaginationTabs(["KNOWN MOVES"]);
    } else {
      setLeftPaginationTabs([
        "DEVELOPER INFO",
        "DEVELOPER SKILLS",
        "KNOWN MOVES",
      ]);
      setRightPaginationTabs([]);
    }
  }, [currPaginationTab]);

  const TabContent = ({ tab }) => {
    if (tab === "DEVELOPER INFO") {
      return (
        <>
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
              <InfoRow label="NAME" value="JASMINE" />
              <TextFieldContainer>
                <Label>
                  <LabelText>TYPE</LabelText>
                </Label>
                <TextField tabIndex="1">
                  <StyledType $backgroundColor="#7f68e6">DRAGON</StyledType>
                </TextField>
              </TextFieldContainer>
              <InfoRow label="MBTI" value="INFP" />
              <InfoRow label="SIGN" value="VIRGO" />
              <InfoRow label="NATL" value="S'PORE" />
            </RowsContainer>
          </HorizontalContainer>
          <TextAreaContainer>
            <Label>
              <LabelText>SELF MEMO</LabelText>
            </Label>
            <TextArea tabIndex="1">
              CALM nature. <LineBreak />
              Graduated from SMU in 2022.
              <LineBreak />
              <br />
            </TextArea>
          </TextAreaContainer>
        </>
      );
    } else if (tab === "DEVELOPER SKILLS") {
      return (
        <>
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
              <SkillRow label="JAVA" value="98" />
              <SkillRow label="REACT" value="80" />
              <SkillRow label="GO" value="88" />
              <SkillRow label="MYSQL" value="84" />
              <SkillRow label="SYS.DES" value="78" />
            </RowsContainer>
          </HorizontalContainer>
          <TextAreaContainer>
            <AbilityTextFieldContainer>
              <Label>
                <LabelText>Ability</LabelText>
              </Label>
              <AbilityTextField>ADAPTABLE</AbilityTextField>
            </AbilityTextFieldContainer>
            <TextArea tabIndex="2">
              High learning ability.
              <LineBreak />
              Work well in teams.
              <LineBreak />
            </TextArea>
          </TextAreaContainer>
        </>
      );
    } else if (tab === "KNOWN MOVES") {
      const MovesPP = () => {
        return (
          <MoveSet>
            <PP>PP</PP>35/35
          </MoveSet>
        );
      };
      return (
        <>
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
            <RightContainer>
              <MovesContainer>
                <MoveContainer>
                  <MoveType $backgroundColor="#adae7b">TECH</MoveType>
                  <Move>
                    <MoveText>CODE</MoveText>
                    <MovesPP>PP35/35</MovesPP>
                  </Move>
                </MoveContainer>
                <MoveContainer>
                  <MoveType $backgroundColor="#e54110">SOCIAL</MoveType>
                  <Move>
                    <MoveText>COOPERATE</MoveText>
                    <MovesPP>PP20/20</MovesPP>
                  </Move>
                </MoveContainer>
                <MoveContainer>
                  <MoveType $backgroundColor="#adae7b">TECH</MoveType>
                  <Move>
                    <MoveText>DEBUG</MoveText>
                    <MovesPP>PP15/15</MovesPP>
                  </Move>
                </MoveContainer>
                <MoveContainer>
                  <MoveType $backgroundColor="#adae7b">TECH</MoveType>
                  <Move>
                    <MoveText>DESIGN</MoveText>
                    <MovesPP>PP10/10</MovesPP>
                  </Move>
                </MoveContainer>
              </MovesContainer>
            </RightContainer>
          </HorizontalContainer>
        </>
      );
    }
  };

  return (
    <Container>
      <CardContainer tabIndex={currPaginationTab}>
        <HeaderContainer>
          <PaginationBar>
            <SelectedPaginationBar>
              <PaginationBarText>
                {leftPaginationTabs[currPaginationTab - 1]}
              </PaginationBarText>
              {leftPaginationTabs.map((tab, index) => (
                <PaginationDot
                  key={index}
                  position={index + 1 - currPaginationTab}
                  onClick={() => setCurrPaginationTab(index + 1)}
                />
              ))}
            </SelectedPaginationBar>
            {rightPaginationTabs.map((tab, index) => (
              <PaginationDot
                key={index}
                position={index + leftPaginationTabs.length + 1}
                onClick={() =>
                  setCurrPaginationTab(index + currPaginationTab + 1)
                }
              />
            ))}
          </PaginationBar>
        </HeaderContainer>
        <TabContent tab={leftPaginationTabs[currPaginationTab - 1]} />
      </CardContainer>
    </Container>
  );
};

export default PokemonCard;
