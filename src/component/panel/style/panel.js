import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: inherit;
  border: 1px solid dimgray;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div``;

export const FormContainer = styled.div`
  width: 50%;
  min-width: 600px;
  height: 50vh;
  margin: auto;
  border: 1px solid dimgray;
  display: flex;
  -webkit-box-shadow: 0 0 15px 5px rgba(0,0,0,0.5);
  box-shadow: 0 0 15px 5px rgba(0,0,0,0.5);
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  font-family: 'Audiowide', cursive;
`;

export const ButtonScoreTeamA = styled.button`
  width: 40px;
  padding: 10px 10px;
  font-family: 'Audiowide', cursive;
  white-space: nowrap;
  text-align: center;
  color: white;
  background-color: #202b33;
  border: 1px solid #333;
  border-radius: 2px;
  
  &:hover{
    background-color: #8800ff;
  }
`;

export const ButtonScoreTeamB = styled.button`
  width: 40px;
  padding: 10px 10px;
  font-family: 'Audiowide', cursive;
  white-space: nowrap;
  text-align: center;
  color: white;
  background-color: #202b33;
  border: 1px solid #333;
  border-radius: 2px;

  &:hover{
    background-color: #8800ff;
  }
`;

export const ButtonStart = styled.button`
  width: 40%;
  padding: 10px 50px;
  font-family: 'Audiowide', cursive;
  color: white;
  background-color: #202b33;
  border: 1px solid #333;
  border-radius: 2px;

  &:hover{
    background-color: #8800ff;
  }
`;

export const ButtonReset = styled.button`
  width: 40%;
  padding: 10px 50px;
  font-family: 'Audiowide', cursive;
  color: white;
  background-color: #202b33;
  border: 1px solid #333;
  border-radius: 2px;

  &:hover{
    background-color: #8800ff;
  }
`;

export const TeamInput = styled.div`
  width: 30%;
  font-family: 'Audiowide', cursive;
`;

export const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: inherit;
`;

export const ScoreTeam = styled.div`
  width: 50px;
  height: 50px;
  font-family: 'Audiowide', cursive;
  font-size: 18px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row;
  position: fixed;
  top: 10px;
  right: 20px;
  justify-content: space-between;
  align-items: baseline;
  width: auto;
  height: 80px;
`;

export const Hello = styled.h3`
  margin-right: 20px;
`;

export const Text = styled.p`
  font-size: small;
  margin: 0px;
`;

export const BorderedContainer = styled.div`
width: 25%;
height: auto;
background-color: inherit;
border: 1px solid dimgray;
display: flex;
flex-flow: row;
justify-content: space-between;
align-items: center;
`;

export const LogoutButton = styled.button`
  border: 1px solid #8800ff;
  border-radius: 25px;
  background: rgb(136, 0, 255);
  background: linear-gradient(45deg, rgb(136, 0, 255) 20%, rgb(160, 91, 238) 40%, rgb(136, 0, 255) 80%);
  padding: 10px 20px;
  width: 150px;
  margin-top: 20px;
  color: white;
  font-size: 18px;
  font-family: 'Audiowide', cursive;

  &:hover {
    cursor: pointer;
    border: 1px solid rgb(135, 32, 226);
    background: linear-gradient(45deg, rgba(135, 32, 226, 0.8) 20%, rgb(136, 0, 255) 40%, rgba(135, 32, 226, 0.8) 80%);
  }
`;
