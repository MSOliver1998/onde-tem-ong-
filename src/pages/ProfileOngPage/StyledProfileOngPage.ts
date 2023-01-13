import styled from "styled-components";

export const ProfileOngStyled = styled.div`
  width: 100%;

  .container {
    width: 100%;
  }

  .infoUser {
    margin-top: 100px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .totalContainer {
    margin-bottom: 50px;
  }

  .InfoAndEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    h2 {
      font-size: var(--fon32);
    }

    > div > button {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--Grey100);
      padding: 15px;
      border: 1px solid transparent;
      border-radius: 8px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  p {
    font-size: var(--font20);
    font-weight: 700;

    .spanName {
      font-size: var(--font16);
      font-weight: 400;
    }
  }

  .bioContainer {
    width: 100%;
  }

  .spanBio {
    font-size: var(--font16);
    font-weight: 400;
  }

  .vanish {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .seeMore {
    border: none;

    text-decoration: underline;

    color: var(--Information);
    background: none;
  }

  .totalDiv {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;

    h3 {
      font-size: var(--font20);
      font-weight: 700;

      span {
        margin-left: 10px;

        font-size: var(--font16);
        font-weight: 700;

        color: var(--Black50);
      }
    }
  }

  .historic {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .historicDonates {
    ul {
      height: 230px;
      display: flex;
      flex-direction: column;
      margin: 15px;
      padding: 5px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 20px;
        background: var(--Grey0);
      }

      &::-webkit-scrollbar-thumb {
        border: 3px solid var(--Grey10);
        border-radius: 20px;
        background-color: var(--Grey10);
      }

      li {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;

        border-bottom: 2px solid var(--Grey50);

        .donorUser {
          display: flex;
          gap: 15px;

          img {
            width: 40px;
            height: 40px;
          }

          p {
            font-size: var(--font16);
            font-weight: 500;
          }
        }

        span {
          font-size: var(--font16);
          font-weight: 700;
        }
      }
    }
  }

  .noDonates {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 220px;
    }

    p {
      font-size: var(--font14);
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .infoUser {
      margin-top: 150px;
    }

    .totalContainer {
      margin-top: 150px;
    }

    .totalDiv {
      width: 356px;
    }

    ul {
      width: 326px;
    }
  }
`;
