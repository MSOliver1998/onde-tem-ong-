import styled from "styled-components";

export const FormDonateStyled = styled.form`

@keyframes loading {
  to{
    transform: rotate(1turn);
  }
}

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 2px solid var(--Color-primary);
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(111, 42, 134, 0.3);
  justify-content: space-between;
  max-width: 100%;
  width: 550px;

  .donateButton {
    max-height: 50px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div > label {
    font-size: var(--font14);
    font-weight: 500;
    color: var(--Color-primary);
  }
  .radios {
    display: flex;
    flex-direction: column;
  }
  .radios > div {
    display: flex;
    justify-content: space-around;
    gap: 25px;
  }
  #donate {
    border-radius: 8px;
    padding: 5px;
    outline: none;
    border: 2px solid var(--Color-primary);
    font-size: var(--font14);
    width: 55%;
  }

  .radioFieldDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .radioFieldDiv > .radios > div {
    width: max-content;
    align-self: flex-end;
  }

  .radioFieldDiv > .radios > div > label {
    width: 40px;
  }
  .radioFieldDiv > div {
    display: flex;
    justify-content: space-between;
    width: 65%;
  }

  input[type="radio"] {
    display: grid;
    place-content: center;
    background-color: var(--Color-primary);
    width: 15px;
  }
  input[type="radio"]::before {
    outline: max(1px, 0.13em) solid;
    outline-offset: max(1px, 0.1em);
    background-color: var(--Color-primary);
  }
  input[type="radio"]:checked::before {
    transform: scale(1);
    outline: max(1px, 0.2em) solid;
    color: var(--Color-primary-50);
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: var(--Color-primary) 1em 1em var(--Color-primary);
  }
  > .valueDiv {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  > .optionDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > span {
      font-size: var(--font16);
      font-weight: 500;
    }

    > div {
      display: flex;
      gap: 30px;

      > div {
        display: flex;
        gap: 5px;

        > label {
          font-size: var(--font14);
          font-weight: 400;
        }
      }
    }
  }

  > button {
    border-radius: 8px;
    color: var(--Withe);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;

    :hover {
      background-color: var(--Color-secondary);
    }
  }

  @media (min-width: 768px) {
    max-width: 100%;

    height: 290px;
    padding: 15px;

    .valueDiv {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      > label {
        align-self: flex-start;
        margin-bottom: 15px;
      }
    }

    #donate {
      padding-left: 15px;
      width: 100%;
      height: 45px;
    }
    .radioFieldDiv {
      flex-direction: column;
    }
    .radioFieldDiv > label {
      font-size: var(--font20);
      width: 100%;
    }

    .radios {
      justify-content: flex-start;
      width: fit-content;
      align-self: flex-start;
      margin-top: 15px;
      max-width: 80px;

      > div {
        flex-direction: row-reverse;
        width: 65px;
        justify-content: space-between;
      }
    }
    > button {
      padding: 0px 50px;
    }
  }
`;
