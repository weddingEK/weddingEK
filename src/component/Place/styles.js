import styled from "styled-components";
import city from "./assets/city.jpeg";

export const Container = styled.div`
  position: relative;
  padding: 40px 20px 80px;
  margin: -50px 0 0;
`;

export const PlaceBackground = styled.div`
  margin: 32px -20px 32px;
  position: relative;
  max-width: 980px;
  background-image: url(${city});
  filter: saturate(0.7);
  height: 460px;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 680px) {
    margin: 32px auto 32px;
  }
`;

export const Im = styled.img`
  position: absolute;
  bottom: 70px;
  left: -20px;
`;

export const Content = styled.div`
  background-color: white;
  position: absolute;
  bottom: 70px;
  right: -40px;
  border-radius: 50%;
  height: 304px;
  width: 304px;
  box-shadow: 0 0 0 16px rgb(255 255 255 / 35%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 32px;
  margin: 0;
`;

export const SubText = styled(Text)`
  margin: 0;
  font-size: 22px;
`;

export const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
