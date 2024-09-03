import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "VT323", monospace;
  min-width: fit-content;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex=grow: 1;
  background-color: #0079c6;
  border: 1px solid #636b7e;
`;

export const PaginationBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6bc7ce;
  width: 70%;
  min-width: fit-content;
  height: 50px;
  color: #ffffff;
  border-radius: 0 20px 20px 0;
  position: relative;
`;

export const SelectedPaginationBar = styled.div`
  display: flex;
  background-color: #e7df9c;
  border-radius: 0 20px 20px 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 0 0 0.5px #0a4f94;
`;

export const PaginationBarText = styled.div`
  width: 320px;
  padding: 0 5px;
  white-space: nowrap;
`;

export const PaginationDot = styled.div`
  background-color: ${(props) =>
    props.position === 0
      ? "#f9fbf9"
      : props.position > 0
      ? "#004994"
      : "#c6be73"};
  border-radius: 30%;
  margin: 10px;
  height: 25px;
  width: 15px;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #636b7e;
  background-color: #ffefd5;
  background-size: 10px 4px;
  background-image: ${(props) =>
    props.tabIndex === 1
      ? "repeating-linear-gradient(0deg, #fef1d7, #fed9af 1px, #ffae93 2px, #fdac90)"
      : props.tabIndex === 2
      ? "repeating-linear-gradient(0deg, #ffed84, #ffe872 1.5px, #ffdf65 1px, #ffdd62)"
      : "repeating-linear-gradient(0deg, #dfc4fa, #dfc4fa 1.5px, #c09ce1 1px, #cdadee)"};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`;

export const HorizontalContainer = styled.div`
  display: flex;
`;

export const LeftProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cdadee;
  // border-right: 2px solid #636b7e;
  // border-bottom: 2px solid #636b7e;
  border: 2px solid #636b7e;
  padding: 5px;
  height: fit-content;
`;

export const Level = styled.div`
  display: flex;
  gap: 20px;
`;

export const LevelText = styled.div`
  display: flex;
  align-items: center;
  color: #313131;
`;

export const Lv = styled.span`
  font-size: 0.8em;
`;

export const ProfileIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #b68edc;
  background-color: #efefef;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(
    0deg,
    #fafafa,
    #ffffff 1.5px,
    #efefef 4px,
    #efefef
  );
  padding: 10px 50px;
`;

export const ProfileIcon = styled.img`
  object-fit: contain;
  width: 150px;
`;

export const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

export const Label = styled.div`
  background-color: #7b8493;
  height: 0.5em;
  width: 40%;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  box-shadow: -4px 0 0 -2px #7b8493, -8px 0 0 -4px #7b8493, 4px 0 0 -2px #7b8493,
    8px 0 0 -4px #7b8493;
`;

export const LabelText = styled.div`
  color: #ffffff;
  text-shadow: -1px -1px 0px #7b8493, 0px -1px 0px #7b8493, 1px -1px 0px #7b8493,
    -1px 1px 0px #7b8493, 0px 1px 0px #7b8493, 1px 1px 0px #7b8493,
    -1px 0px 0px #7b8493, 1px 0px 0px #7b8493;
  padding: 0px 15px 2px 15px;
`;

export const TextField = styled.div`
  background-color: #fff6ef;
  border-radius: 3px;
  line-height: 0.8em;
  height: 0.8em;
  color: #3a3939;
  display: flex;
  width: 100%;
  padding: 0px 20px;
  left: -5px;
  position: relative;
  box-shadow: -4px 0 0 -2px #fff6ef, -8px 0 0 -4px #fff6ef, 4px 0 0 -2px #fff6ef,
    8px 0 0 -4px #fff6ef;
`;

export const SkillTextFieldContainer = styled(TextFieldContainer)`
  justify-content: space-between;
`;

export const SkillTextField = styled(TextField)`
  background-color: #ffffde;
  box-shadow: -4px 0 0 -2px #ffffde, -8px 0 0 -4px #ffffde, 4px 0 0 -2px #ffffde,
    8px 0 0 -4px #ffffde;
  width: 80px;
  left: 0;
  padding: 2px;
  justify-content: end;
`;

export const AbilityTextFieldContainer = styled(TextFieldContainer)`
  padding: 10px 20px;
`;

export const AbilityTextField = styled(TextField)`
  background-color: #ffffde;
  box-shadow: -4px 0 0 -2px #ffffde, -8px 0 0 -4px #ffffde, 4px 0 0 -2px #ffffde,
    8px 0 0 -4px #ffffde;
`;

export const AbilityTextArea = styled.div`
  background-color: #ffffa5;
`;

export const StyledType = styled.div`
  background-color: ${(props) => props.$backgroundColor || "#f9fbf9"};
  border-radius: 3px;
  font-size: 0.7em;
  color: #f9fbf9;
  display: flex;
  padding: 0px 5px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  min-height: 158px;
`;

export const TextArea = styled.div`
  background-color: ${(props) =>
    props.tabIndex === "1"
      ? "#fff6ef"
      : props.tabIndex === "2"
      ? "#ffffa5"
      : "#f7ffff"};
  border-radius: 3px;
  color: #3a3939;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 0;
  position: relative;
  top: -0px;
  box-shadow: -4px 0 0 -2px ${(props) => (props.tabIndex === "1" ? "#fff6ef" : props.tabIndex === "2" ? "#ffffa5" : "#f7ffff")},
    -8px 0 0 -4px
      ${(props) =>
        props.tabIndex === "1"
          ? "#fff6ef"
          : props.tabIndex === "2"
          ? "#ffffa5"
          : "#f7ffff"},
    4px 0 0 -2px ${(props) => (props.tabIndex === "1" ? "#fff6ef" : props.tabIndex === "2" ? "#ffffa5" : "#f7ffff")},
    8px 0 0 -4px ${(props) => (props.tabIndex === "1" ? "#fff6ef" : props.tabIndex === "2" ? "#ffffa5" : "#f7ffff")};
  line-height: 0.8em;
`;

export const LineBreak = styled.div`
  border-top: 2px solid #e1e1c3;
  margin: 0 0 5px 0;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-size: 10px 5px;
  background-image: repeating-linear-gradient(
    0deg,
    #dafefe,
    #dafefe 0.5px,
    #a0f1d8 1px,
    #a1f2d9
  );
  height: 414px;
`;

export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
`;

export const MoveContainer = styled.div`
  position: relative;
  width: 300px;
`;

export const MoveType = styled(StyledType)`
  position: absolute;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Move = styled.div`
  background-color: #f9fbf9;
  border-radius: 3px;
  color: #3a3939;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0 5px;
  margin: 5px 0 0 10px;
  line-height: 0.6em;
`;

export const MoveText = styled.div`
  font-size: 0.9em;
  align-self: start;
  margin: 5px 0 0 110px;
`;

export const MoveSet = styled.div`
  font-size: 0.8em;
`;

export const PP = styled.span`
  font-size: 0.85em;
`;