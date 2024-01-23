import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  font-size: 18px;
  gap: 20px;
`;

export const CheckOnIt = styled.div`
  display: flex;
  gap: 10px;

  p {
    margin: 0;
  }
`;

export const NameCont = styled.input`
  background-color: transparent;
  border: unset;
  border-bottom: 1px solid #dcebfa;
  padding: 20px 0;
`;

export const Checkbox = styled.input`
  background-color: transparent;
  border: 1px solid #dcebfa;
  padding: 5px;
`;
