import styled, {css} from 'styled-components/macro';

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  color: black;
  font-size: 36px;
  background-color: #fac622;
  height: 62px;
  
  &:after {
    right: -20px;
    content: "";
    position: absolute;
    border-right: 20px solid transparent;
    border-top: 31px solid #fac622;
    border-bottom: 31px solid #fac622;
  }
  ${({left}) => !left && css`
    &:before {
      left: -20px;
      content: "";
      position: absolute;
      border-left: 20px solid transparent;
      border-top: 31px solid #fac622;
      border-bottom: 31px solid #fac622;
    }
  `}

  .flip-horizontal-bottom {
    transition: transform 1s;
    transform-style: preserve-3d;
    transform: rotateX(-360deg) translateY(-100%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
  
  ${({left}) => left && css`
    justify-content: flex-start;
  `}
`;

export const ScoreTeamA = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;  
  width: 30px;
  height: 42px;
  padding: 0 5px;
  font-size: 36px;
`;

export const TeamA = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 400;
  height: 42px;
  padding: 0 5px;
  white-space: nowrap;
`;

export const ScoreTeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  width: 30px;
  height: 42px;
  padding: 0 5px;
  font-size: 36px;
`;

export const TeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 400;
  height: 42px;
  padding: 0 5px;
  white-space: nowrap;
`;

export const Timer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 42px;
  min-width: 173px;
  height: 62px;
  padding: 0;  
  z-index: 999;
  background-color: black;
  color: #fac622;
  
  @media(max-width: 1400px){
    width: 150px;
  }
`;

export const LogoTeamA = styled.div`
  height: 59px;
  width: 173px;
  ${({logo}) => css`
    background: url("${logo}") center / cover no-repeat;
  `}
  margin: 2px 4px;
`;

export const LogoTeamB = styled.div`
  height: 59px;
  width: 173px;
  ${({logo}) => css`
    background: url("${logo}") center / cover no-repeat;
  `}
  margin: 2px 4px;
`;

export const HelmetContainer = styled.div`
  height: 42px;
  width: calc(60px * 5);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  ${({right})=>right ? css`justify-content: flex-start;` : css`justify-content: flex-end;`}
  margin: 0 10px;
`;

export const HelmetSVG = styled.div`
  display: flex;
  align-items: center;  
  padding: 0 5px;

  img {
    width: 42px;
    height: 42px;
  }
`;

export const RKP = styled.div`
  display: flex;
  justify-content: flex-end;

  img{
    width: 90px;
  }
  ${({tournament}) => tournament === 'pl' ?`` :  css`background-image: radial-gradient(white 30%, rgba(255, 255, 255, 0.01) 70%);`}
  `;

export const BLShield = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 20px;
  right: 20px;
  z-index: 1;
  img{
    width: 70px;
    height: 62px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  padding: 0 100px 50px;
  height: 200px;

  @media(max-width: 1400px){
    padding: 0 50px 50px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const LiveContainer = styled.div`
  display: flex;
  height: 62px;
  width: 173px;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 42px;
  text-transform: uppercase;
  position: relative;
  font-weight: bold;
  padding-left: 10px;
  top: 62px;
  left: 0;
`;

export const LiveText = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 0 20px;  
  &:before{
    content: '';
    z-index: 1;
    display: block;
    height: 31px;
    width: 31px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    top: 0;
    bottom: 0;
    left: -10px;
  }
`;