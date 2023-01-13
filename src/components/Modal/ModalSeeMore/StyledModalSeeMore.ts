import styled from "styled-components";

export const StyledModalSeeMore = styled.div`
  margin-top: 40px;
  width: 800px;
  max-width: 100%;
  max-height: 650px;
  overflow-y: scroll;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .loading {
    margin: 100px;
    width: 60px;
    height: 60px;
    align-self: center;
    justify-self: center;
  }

  .pics {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .backgroundPic {
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  .profilePic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    transform: translateY(-80px);
  }

  .infos {
    display: flex;
    justify-content: space-between;
    transform: translateY(-90px);
    h2 {
      color: var(--Black);
      font-size: var(--font20);

      > span {
        font-size: var(--font16);
        font-weight: 500;
      }
    }

    > .infosLeft {
      padding: 10px;
      width: 60%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: 20px;
      > .title {
        font-size: var(--font24);
      }
      p {
        font-size: var(--font16);
        font-weight: 500;
      }

      .bioDiv {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }

    > .infosRight {
      margin-top: 25px;
      width: 40%;
      display: flex;
      flex-direction: column;
      object-fit: cover;
      margin-right: 10px;

      > h2 {
        padding-bottom: 20px;
      }
      > ul {
        max-height: 300px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;

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

        > li {
          display: flex;
          justify-content: space-between;
          padding: 5px;
          gap: 10px;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--Black);
          box-shadow: 10px 1px 10px rgba(0, 0, 0, 0.25);
          > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            > p {
              font-weight: 500;
            }
          }

          > div > img {
            align-self: flex-start;
            width: 40px;
            height: 40px;
            object-fit: cover;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    max-height: 450px;
    .donorUser {
      display: flex;
      flex-direction: row;
      gap: 15px;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      p {
        font-size: var(--font16);
        width: fit-content;
        font-weight: 500;
      }
    }
    .infos {
      flex-direction: column;
      justify-content: center;

      > .infosLeft {
        > .title {
          font-size: var(--font16);
        }
      }
      > .infosRight {
        flex-direction: column;
        margin-top: 45px;
        width: 100%;
        > ul {
          border-radius: 8px;
          width: 100%;
          height: 200px;
          padding-top: 0;
          > li {
            flex-wrap: nowrap;
            padding: 10px;
            > div {
              flex-direction: row;
            }
          }
        }
      }
    }
    .title {
      font-size: var(--font14);
    }
    .backgroundPic {
      height: 22vh;
    }
    .profilePic {
      width: 30vw;
      height: 30vw;
      max-width: 150px;
      max-height: 150px;
    }
  }
`;
