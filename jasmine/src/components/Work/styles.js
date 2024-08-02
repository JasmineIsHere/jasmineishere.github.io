import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
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
`;

export const PaginationBarText = styled.div`
  width: 300px;
  padding: 0 5px;
`;

export const PaginationDot = styled.div`
  background-color: ${(props) => (props.position === 0 ? "#f9fbf9" : props.position > 0 ? "#004994" : "#c6be73")};
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
  background-size: 10px 3px;
  background-image: repeating-linear-gradient(
    0deg,
    #fef1d7,
    #fed9af 1px,
    #ffae93 1px,
    #fdac90
  );
`;

export const HorizontalContainer = styled.div`
  display: flex;
`;

export const LeftProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cdadee;
  border-right: 2px solid #636b7e;
  border-bottom: 2px solid #636b7e;
  padding: 5px;
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
  background-size: 10px 5px;
  background-image: repeating-linear-gradient(
    0deg,
    #fafafa,
    #ffffff 1.5px,
    #efefef 1px,
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
  flex-grow: 1;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  background-color: #7b8493;
  height: 0.5em;
  width: 40%;
  min-width: fit-content;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  box-shadow:
    -4px 0 0 -2px #7b8493, 
    -8px 0 0 -4px #7b8493, 
     4px 0 0 -2px #7b8493, 
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
  box-shadow:
    -4px 0 0 -2px #fff6ef, 
    -8px 0 0 -4px #fff6ef, 
     4px 0 0 -2px #fff6ef, 
     8px 0 0 -4px #fff6ef; 
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
`;

export const TextArea = styled.div`
  background-color: #fff6ef;
  border-radius: 3px;
  color: #3a3939;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 0;
  position: relative;
  top: -0px;
  box-shadow:
    -4px 0 0 -2px #fff6ef, 
    -8px 0 0 -4px #fff6ef, 
     4px 0 0 -2px #fff6ef, 
     8px 0 0 -4px #fff6ef;
  line-height: 0.8em;
`;

export const LineBreak = styled.div`
  border-top: 2px solid #e1e1c3;
  margin: 0 0 5px 0;
`;