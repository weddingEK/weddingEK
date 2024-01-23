import styled from "styled-components";
import background from "./assets/bg.jpeg";

export const Container = styled.div`
  position: relative;
  padding: 110px 20px 80px;
  margin: -50px 0 0;

  .swiper-pagination-bullet {
    background-color: white;
  }

  .swiper-pagination-bullet-active {
    background-color: #faebdc;
  }

  :before {
    content: "";
    background-image: url(${background});
    /* CSS gradients */
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 1)
      ),
      url(${background});
    background-position: top center;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  font-size: 34px;
  z-index: 112;
  padding: 10px 20px;
  margin: 0 auto;
  border-radius: 5px;
  width: calc(100% - 40px);

  @media (max-width: 425px) {
    font-size: 28px;
  }

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 112;
  padding: 10px 20px;
  margin: 48px auto 48px;
  font-size: 18px;
  border-radius: 5px;
  max-width: 980px;
`;

export const Pictures = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 10px;
  max-width: 980px;

  @media (max-width: 690px) {
    height: 420px;
  }
`;
