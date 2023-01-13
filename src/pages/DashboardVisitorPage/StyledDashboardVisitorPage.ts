import styled from "styled-components";
import imagesBackground from "../../assets/imgs/imagesBackground.svg";

interface iStyledDashboardVisitorPage {
  Imagen: {
    imagem: string;
  };
}

export const StyledDashboardVisitorPage = styled.div<iStyledDashboardVisitorPage>`
  width: 100%;
  height: 100%;

  .backgroundCarousel {
    background: rgba(0, 0, 0, 0.3);
    background-image: url("assets/Background.png");
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .boxCarousel {
    width: 100%;
    height: 370px;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: var(--Withe);
      position: absolute;

      bottom: 20%;
    }

    .boxVectors {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;

      /* background-color: rgb(0, 0, 0, 0.3); */

      .blur {
        width: 100%;
      }
      .home {
        width: 60%;
        color: var(--Blue);

        margin-top: 10%;

        @media (min-width: 600px) {
          top: 25%;
        }
      }

      img {
        width: 100%;
        position: absolute;
      }
    }
  }

  .back_img {
    width: 100%;
    height: 100%;
  }

  .information {
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background-image: url("assets/Background Desktop.svg");
    background-position: center;
    background-repeat: no-repeat;
    transition: background-image 2s ease;

    margin-top: 10px;

    background-color: var(--Withe);
  }

  footer {
    width: 100%;
    min-height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--Black50);

    margin-top: 90px;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      @media (min-width: 700px) {
        display: flex;
        align-items: center;
      }
      > div {
        display: flex;
        flex-direction: row-reverse;
        margin: 15px 0 15px 0;
      }
    }

    h3 {
      color: var(--Withe);

      width: 100%;

      text-align: center;

      font-size: var(--font14);

      font-weight: 500;

      margin-bottom: 20px;
    }

    button {
      width: 30px;
      height: 30px;
      svg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      background: none;
      border: none;
    }
    .blue {
      color: var(--Blue);
    }
  }
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    min-height: 120px;

    @media (min-width: 900px) {
      width: 70%;
      margin-top: 60px;
    }

    overflow: hidden;

    position: absolute;

    z-index: 3;
    > div {
      width: 100%;
    }

    button {
      width: 20px;
      height: 20px;

      :hover {
        color: var(--Black50);
      }

      @media (min-width: 600px) {
        width: 30px;
        height: 30px;
      }

      @media (min-width: 900px) {
        width: 40px;
        height: 40px;
      }

      border: none;
      background: none;

      position: absolute;

      bottom: 50%;

      svg {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      right: 0px;

      margin-right: 0px;

      transform: rotate(180deg);
    }

    .left {
      left: 0;

      z-index: 2;
    }
  }
  .marginsBottonHeader {
    padding: 10% 0 0 0;

    width: 100%;

    background-color: var(--Black);

    opacity: 30%;
  }
`;
