import styled from "styled-components";

export const FormEditUserStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  border: 2px solid var(--Color-primary);
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(111, 42, 134, 0.3);
  max-width: 100%;
  width: 450px;
  height: 350px;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 15px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        > label {
          font-size: var(--font14);
          font-weight: 500;
          color: var(--Color-primary);
          align-self: flex-start;
        }
        > input {
          height: 35px;
          padding-left: 10px;
          border-radius: 8px;
          width: 100%;
          outline: none;
          border: 2px solid var(--Color-primary);
          font-size: var(--font14);
        }
      }
    }
    > button {
      width: 100%;
      padding: 15px;
      background-color: var(--Color-primary);
      color: var(--Withe);
      border: none;
      border-radius: 8px;
    }
  }
`;
