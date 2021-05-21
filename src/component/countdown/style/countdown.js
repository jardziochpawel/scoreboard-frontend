import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  min-height: 120px;
  min-width: 160px;
`;

export const Button = styled.button`
  background-color: #202b33;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #8800ff;
  }
`;

export const Display = styled.div`
  
  button {
    margin: 0 15px;
    border: solid 1px transparent;
    border-radius: 2px;
    padding: 4px 16px;
    color: #ffffff;

    font-size: 16px;
  }

  button:hover {
    background-color: #8800ff;
  }
`;

export const Time = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  margin: 5px 0;
`;
