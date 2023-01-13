import styled from "styled-components";


export const FormEditOngStyled = styled.form`

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
  width: 567px;
  max-width: 100%;
  height: 500px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    margin-right: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background: #d4bfda;
  }

  &::-webkit-scrollbar-thumb {
    border: 3px solid var(--Color-primary);
    border-radius: 20px;
    background-color: var(--Color-primary);
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 20px;
    width: 100%;
  }

  > button:disabled{
    margin: 0 auto;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    padding: 0px;
    border: 5px solid var(--Color-primary);
    background-color: transparent;
    border-top-color: white ;
    font-size: 0px;
    animation: loading 1s infinite;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: center;

    > label {
      font-size: var(--font14);
      font-weight: 500;
      color: var(--Color-primary);
      width: 100%;
    }

    > input {
      border-radius: 6px;
      padding-left: 10px;
      height: 50px;
      width: 100%;
      outline: none;
      border: 2px solid var(--Color-primary);
      font-size: var(--font14);
    }
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

  .submitEditOngBtn {
    height: 50px;
    margin-top: 10px;
    border: none;
    align-self: flex-end;
    font-size: var(--font20);
    font-weight: 500;
    background-color: var(--Color-primary);
    color: var(--Withe);
  }

  @media (min-width: 768px) {
    > div {
      width: 100%;
    }
    .submitEditOngBtn {
      height: 50px;
      margin-top: 10px;
      align-self: flex-end;
      font-size: var(--font20);
      font-weight: 500;
      background-color: var(--Color-primary);
      color: var(--Withe);
    }
  }
`;
