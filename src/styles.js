import styled from "styled-components";
import background from "./assets/main-photo.jpeg";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-position: top center;
  background-repeat: no-repeat;

  :before {
    content: "";
    background-image: url(${background});
    background-position: top center;
    position: fixed;
    background-repeat: repeat;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    animation-name: example1;
    animation-duration: 4s;
    filter: blur(4px);

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
