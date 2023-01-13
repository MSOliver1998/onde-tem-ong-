import styled from "styled-components";

export const StyledLoginPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("assets/Background Mobile.svg");
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 2s ease;

  figure {
    width: 100%;
    align-content: flex-start;

    .upLeftImage {
      width: 35px;
      height: 32px;

      margin: 15px 12px 20px;
    }
  }

  .container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .loginMobile {
      width: 90%;

      padding: 15px;

      display: flex;
      justify-content: center;

      border-radius: 50px 1px 50px 12px;

      text-align: center;

      color: var(--Color-primary);
      background-color: var(--Color-terciary);
    }

    .loginContainer {
      width: 100%;
      display: none;
      justify-content: space-between;
      align-items: center;

      h1 {
        width: 260px;
        padding: 15px;

        display: flex;
        justify-content: center;

        border-radius: 50px 1px 50px 12px;

        color: var(--Color-primary);
        background-color: var(--Color-terciary);
      }

      .returnButton {
        width: 122px;
        height: 44px;

        border: 1px solid var(--Color-primary);
        border-radius: 8px;

        color: var(--Color-primary);
        background: transparent;
      }
    }

    .formContainer {
      width: 90%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      form {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        .inputContainer {
          display: flex;

          border-bottom: 1px solid var(--Color-primary);
        }

        .error {
          border-bottom: 1px solid var(--Negative);
        }

        button {
          width: 100%;

          padding: 15px 0;

          border: 1px solid transparent;
          border-radius: 8px;

          color: white;
          background-color: var(--Color-primary);
        }
      }
    }

    span {
      font-size: var(--font12);
    }

    .registerButton {
      width: 100%;

      padding: 15px 0;

      border: 1px solid var(--Color-primary);
      border-radius: 8px;

      color: var(--Color-primary);
      background-color: var(--White);
    }
  }

  .logoImage {
    width: 241px;

    margin: 20px 0;
  }

  @media (min-width: 390px) {
    background-image: url("assets/Background Desktop.svg");
    background-size: cover;
    background-position: center;
    transition: background-image 2s ease;
  }

  @media (min-width: 600px) {
    .container {
      .loginMobile {
        width: 540px;
      }

      .formContainer {
        width: 540px;
      }
    }
  }

  @media (min-width: 768px) {
    figure {
      display: none;
    }

    .container {
      width: 80%;

      padding: 20px;

      justify-content: center;
      align-items: flex-end;

      .loginMobile {
        display: none;
      }

      .loginContainer {
        display: flex;
      }

      .formContainer {
        width: 300px;
      }
    }
  }
`;
