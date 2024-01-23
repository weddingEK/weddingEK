import styled from "styled-components";
import background from "./assets/main-photo.jpeg";

export const Container = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
  width: 100%;
  justify-content: center;

  :before {
    content: "";
    background-image: url(${background});
    background-position: top center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    animation-name: example1;
    animation-duration: 4s;

    @keyframes example1 {
      0% {
        transform: scale(2);
      }

      100% {
        transform: scale(1);
      }
    }
  }
`;

export const NavigationBar = styled.div`
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  gap: 10px 32px;
  top: 0;
  padding: 20px;
  width: calc(100% - 40px);
  flex-wrap: wrap;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const NamesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation-name: example;
  animation-duration: 4s;

  svg {
    width: 40px;
    height: 40px;
  }

  @keyframes example {
    0% {
      transform: scale(3);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const PersonName = styled.p`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  font-size: 28px;
  margin: 0;
`;
