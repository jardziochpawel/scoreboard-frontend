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
  height: 80px;
  
  &:after {
    right: -30px;
    content: "";
    position: absolute;
    border-right: 30px solid transparent;
    border-top: 40px solid #fac622;
    border-bottom: 40px solid #fac622;
  }
  ${({left}) => !left && css`
    &:before {
      left: -30px;
      content: "";
      position: absolute;
      border-left: 30px solid transparent;
      border-top: 40px solid #fac622;
      border-bottom: 40px solid #fac622;
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
  width: 60px;
  height: 50px;
  padding: 0 5px;
  font-size: 48px;
`;

export const TeamA = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  height: 50px;
  padding: 0 5px;
  white-space: nowrap;
  @media(max-width: 1400px){
    width: 200px;
  }
`;

export const ScoreTeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  width: 60px;
  height: 50px;
  padding: 0 5px;
  font-size: 48px;
`;

export const TeamB = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  height: 50px;
  padding: 0 5px;
  white-space: nowrap;
  margin-right: 20px;
  
  @media(max-width: 1400px){
    width: 200px;
  }
`;

export const Timer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 50px;
  min-width: 200px;
  height: 80px;
  padding: 0;  
  z-index: 999;
  background-color: black;
  color: #fac622;
  
  @media(max-width: 1400px){
    width: 150px;
  }
`;

export const LogoTeamA = styled.div`
  height: 70px;
  width: 150px;
  ${({logo}) => css`
    background: url("${logo}") center 70% / 250% no-repeat;
  `}
  margin: 4px;
`;

export const LogoTeamB = styled.div`
  height: 70px;
  width: 150px;
  ${({logo}) => css`
    background: url("${logo}") center 70% / 250% no-repeat;
  `}
  margin: 4px;
`;

export const HelmetContainer = styled.div`
  height: 50px;
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
    width: 50px;
    height: 50px;
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
    height: 80px;
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
  height: 80px;
  width: 250px;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  text-transform: uppercase;
  position: relative;
  font-weight: bold;
  padding-left: 10px;
  top: 80px;
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
    height: 40px;
    width: 40px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    top: 0;
    bottom: 0;
    left: -10px;
  }
`;