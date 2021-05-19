import styled, {css} from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  letter-spacing: 2px;
  color: white;
  text-shadow: 0 2px 1px #7c7c7c,
  -1px 3px 1px #545454,
  -2px 5px 1px #484848;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: calc(350px + 350px + 60px + 60px + 360px);
  height: auto;
`;

export const ScoreTeamA = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: 'MedievalSharp', cursive;
  font-weight: 900;  
  width: 60px;
  height: 50px;
  padding: 0 20px;
`;

export const TeamA = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 36px;
  font-family: 'MedievalSharp', cursive;
  font-weight: 900;
  width: 350px;
  height: 50px;
  white-space: nowrap;
`;

export const ScoreTeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: 'MedievalSharp', cursive;
  font-weight: 900;
  width: 60px;
  height: 50px;
  padding: 0 20px;
`;

export const TeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 36px;
  font-family: 'MedievalSharp', cursive;
  font-weight: 900;
  width: 350px;
  height: 50px;
  white-space: nowrap;
`;

export const Timer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: 'MedievalSharp', cursive;
  font-weight: 900;
  min-width: 200px;
  height: 50px;
  padding: 0 20px;  
  z-index: 999;
`;

export const LogoTeamA = styled.div`
  height: 100px;
  width: 100px;
  ${({logo}) => css`
    background: url("${logo}") center / contain no-repeat;
  `}
  margin: 4px 0;
`;

export const LogoTeamB = styled.div`
  height: 100px;
  width: 100px;
  ${({logo}) => css`
    background: url("${logo}") center / contain no-repeat;
  `}
  margin: 4px 0;
`;

export const HelmetContainer = styled.div`
  width: calc(35px * 5);
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  ${({right})=>right ? css`justify-content: flex-end;` : css`justify-content: flex-start;`}
`;

export const HelmetSVG = styled.div`
  height: 40px;
  width: 35px;
    svg > g {
      fill: white;
    }
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const Knight = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  left: 0;
  z-index: 1;
  img{
    width: 150px;
  }
`;

export const BLShield = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 20px;
  right: 20px;
  z-index: 1;
  img{
    width: 120px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100vw;
  padding: 0 200px;
  height: 150px;
  background: rgb(72, 72, 72);
  background: linear-gradient(0deg, rgba(72, 72, 72, 0.9) 0%, rgba(68, 68, 68, 0.6) 80%, rgba(51, 51, 51, 0) 100%);
`;

export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  width: 150px;
`;