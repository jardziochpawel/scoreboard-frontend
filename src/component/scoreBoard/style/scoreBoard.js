import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  margin: auto;
  height: auto;
  background-color: black;
  color: white;
`;

export const ScoreTeamA = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: Helvetica, sans-serif, Arial;
  font-weight: 900;  
  width: auto;
  height: 80px;
  padding: 0 20px;
`;

export const TeamA = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: Helvetica, sans-serif, Arial;
  font-weight: 900;
  width: auto;
  height: 80px;
  padding: 0 20px;
  white-space: nowrap;
`;

export const ScoreTeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: Helvetica, sans-serif, Arial;
  font-weight: 900;
  width: auto;
  height: 80px;
  padding: 0 20px;  
`;

export const TeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: Helvetica, sans-serif, Arial;
  font-weight: 900;
  width: auto;
  height: 80px;
  padding: 0 20px;
  white-space: nowrap;
`;

export const Timer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: Helvetica, sans-serif, Arial;
  font-weight: 900;
  min-width: 100px;
  height: 80px;
  padding: 0 20px;  
`;

export const LogoTeamA = styled.div`
  height: 80px;
  width: 100%;
  ${({logo}) => css`
    background: url("${logo}") center / contain no-repeat;
  `}
  margin: 4px 0;
`;

export const LogoTeamB = styled.div`
  height: 80px;
  width: 100%;
  ${({logo}) => css`
    background: url("${logo}") center / contain no-repeat;
  `}
  margin: 4px 0;
`;