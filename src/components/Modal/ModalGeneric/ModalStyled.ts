import styled from "styled-components";

export const ModalStyled = styled.div`
  & .withoutBorder {
    border: none;
    background-color: transparent;
  }
`;

export const ModalBodyStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
`;

export const ModalDiv = styled.div`
  background-color: var(--Withe);
  padding: 15px;
  margin: 0 15px;
  border-radius: 9px;
  position: relative;
  max-width: 90vw;

  > div > form {
    margin-top: 35px;
  }

  > .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--Color-primary);
    color: var(--Withe);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    padding: 5px 20px;
    top: 0;
    left: 0;
    width: 100%;

    > p {
      font-size: 20px;
      font-weight: 500;
      color: var(--Withe);
    }

    > button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      background: transparent;

      > .iconClose {
        color: var(--Withe);
        background: transparent;
        width: 100%;
        height: 100%;
      }
    }

    > button:hover .iconClose {
      color: var(--Color-primary-50);
    }
  }
`;
