import styled, {css} from "styled-components";
import {Envelope, Lock} from '@styled-icons/fa-solid';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-image: url(${"/images/login-bg_v2.svg"});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

export const CardBackground = styled.div`
  width: 500px;
  height: 500px;
  border: white 0 solid;
  border-radius: 25px;
  background: rgb(255,255,255);
  background: linear-gradient(45deg, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.4) 60%);

`;

export const Card = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,255,255);
  background-color: rgba(255,255,255, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  overflow: hidden;
  border: white 0 solid;
  border-radius: 25px;
`;

export const Title = styled.h1`
  color: white;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  width: 250px;
  border-bottom: 1px solid white;
  margin-bottom: 20px;

  ${({error})=>error && css`
    border-bottom: 1px solid darkred;
    color: darkred;
    background-color: rgb(139, 0, 0, 0.2);
  `}
`;

export const Label = styled.label`
  color: white;
  align-self: flex-start;
  width: 100%;
`;

export const Mail = styled.input`
  width: 230px;
  border: none;
  color: white;
  background-color: transparent;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: 'Arial', sans-serif;  

  ${({error})=>error && css`
    color: darkred;
  `}

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: white;
  }

  &::placeholder {
    color: white;
  }
`;

export const Password = styled.input`
  width: 230px;
  border: none;
  color: white;
  background-color: transparent;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: 'Arial', sans-serif;

  &:focus{
    box-shadow: none;
    outline: none;
  }
  &::-webkit-input-placeholder{
    font-family: 'Audiowide', cursive;
    color: white;
  }
  &::placeholder{
    font-family: 'Audiowide', cursive;
    color: white;
  }
`;

export const Icon = styled.div`
  color: white;
  padding: 11px 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const IconLock = styled(Lock)`
  color: white;
  width: 14px;
  height: 16px;
`;

export const IconMail = styled(Envelope)`
  color: white;
  width: 14px;
  height: 16px;
`;

export const Button = styled.button`
  border: 1px solid #8800ff;
  border-radius: 25px;
  background: rgb(136, 0, 255);
  background: linear-gradient(45deg, rgb(136, 0, 255) 20%, rgb(160, 91, 238) 40%, rgb(136, 0, 255) 80%);
  padding: 10px 20px;
  width: 350px;
  margin-top: 20px;
  color: white;
  font-size: 18px;
  font-family: 'Audiowide', cursive;

  &:hover {
    cursor: pointer;
    border: 1px solid rgb(135, 32, 226);
    background: linear-gradient(45deg, rgba(135, 32, 226, 0.8) 20%, rgb(136, 0, 255) 40%, rgba(135, 32, 226, 0.8) 80%);
  }
  
  &:disabled{
    cursor: not-allowed;
  }
`;

