import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: white;
  margin: -30px 0 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: -30px auto 0;
  padding: 10px;
  z-index: 2;
  width: fit-content;

  @media (max-width: 370px) {
    margin: -30px auto 0;
  }
`;

export const Numbers = styled.div`
  align-items: center;
  color: white;
  background-color: #aebfca;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  height: 100%;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  gap: 4px;
  width: 80px;

  @media (max-width: 434px) {
    font-size: 11px;
    width: 60px;
    padding: 2px;
  }
`;
