import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 980px;
`;

export const Times = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  width: calc(100% - 40px);

  @media (max-width: 680px) {
    justify-content: space-between;
  }
`;

export const Time = styled.p`
  font-size: 32px;
  color: #5a86ad;
  opacity: 0.8;
  margin: 0;
  z-index: 500;
`;

export const Text = styled.p`
  font-size: 24px;
  margin: 0;
  z-index: 0;
`;
