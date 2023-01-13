import styled from "styled-components";
import arrowDown from "../../assets/imgs/arrowDown.svg";

export const StyledRegisterPage = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("assets/Background Mobile.svg");
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 2s ease;

  .background {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: rgba(111, 42, 134, 0.81);
  }

  .container {
    width: 100%;
    max-width: 1400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .RegisterMobile {
      text-align: center;
      border-radius: 50px 1px 50px 12px;
      background: rgba(232, 230, 233, 0.09);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px 1px 50px 12px;
    }

    .divBlockRight > img {
      margin-top: 20px;
      width: 241px;
    }

    .RegisterAndTitle {
      width: 100%;
    }

    .titleRegister {
      font-weight: 700;
      font-size: var(--fon32);
      line-height: 59px;
      color: var(--Withe);
    }

    .formContainer {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    input {
      color: var(--Withe);
    }

    input::placeholder {
      color: var(--Withe);
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
  span {
    font-size: var(--font14);
    color: var(--Withe);
  }

  .LoginButton {
    width: 100%;

    padding: 15px 0;

    border: 1px solid var(--Withe);
    color: var(--Withe);
    border-radius: 8px;
    background-color: transparent;
  }

  .selectTypeUser {
    display: flex;
  }

  .selectTypeUser > div > div > input {
    background: red;
    width: 20px;
  }

  .labelSelectType {
    color: var(--Withe);
  }

  .divSelectCategory {
    width: 100%;
    margin-top: -10px;
    display: flex;
    flex-direction: column;
  }

  .divSelectCategory > input {
    background: red;
  }

  .selectTypeUser > div {
    border-color: var(--Withe);
  }

  .LabelAndSelect {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }

  .divSelectCategory > div {
    border-color: var(--Withe);
  }

  .divSelectCategory label {
    color: var(--Withe);
  }

  .divSelectCategory select {
    height: 45px;
    width: 100%;
    border: none;
    outline: none;
    background: var(--Color-primary-50);
    border-radius: 8px;
    font-size: var(--font14);
    color: var(--Color-terciary);
    padding: 10px;
    font-weight: 400;
    border: 2px solid var(--Color-primary);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url(${arrowDown});
    background-position: 95% 50%;
    background-repeat: no-repeat;
    background-size: 25px;
  }

  .divSelectCategory .errorSelect {
    border-color: var(--Negative);
    border-width: 1px;
  }

  .divBlockLeft {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .inputContainer {
      display: flex;

      border-bottom: 1px solid var(--Withe);
    }

    .error {
      border-bottom: 1px solid var(--Negative);
    }
  }

  .divBlockLeft > div {
    border-color: var(--Withe);
  }

  .divBlockRight {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    .inputContainer {
      display: flex;

      border-bottom: 1px solid var(--Withe);
    }

    .error {
      border-bottom: 1px solid var(--Negative);
    }
  }

  @media (min-width: 390px) {
    background-image: url("assets/Background Desktop.svg");
    background-size: cover;
    background-position: center;
    transition: background-image 2s ease;
  }

  @media (min-width: 768px) {
    height: 100vh;
    max-width: 100vw;

    .RegisterMobile {
      width: 45%;
      padding: 17px 0px;
    }

    .RegisterAndTitle {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .background {
      height: 100%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    form {
      flex-direction: row;
      gap: 80px;
    }

    .container {
      width: 80%;
      display: flex;

      .formContainer {
        gap: 40px;
      }

      .titleRegister {
        font-size: var(--fon32);
      }
    }

    .divBlockLeft {
      width: 400px;
    }

    .divBlockRight {
      width: 400px;
    }

    button {
      height: 70px;
    }
  }

  @media (min-width: 1247px) {
    .RegisterMobile {
      width: 404px;
    }
  }
`;
