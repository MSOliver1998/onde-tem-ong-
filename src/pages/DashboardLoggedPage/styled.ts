import styled from "styled-components";

export const StyledDashboard = styled.main`
  margin: 0 15px;
  margin-top: 25px;

  > div > section {
    display: flex;
    justify-content: space-between;
  }
  .searchDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 536px;
    margin: 0 auto;
    margin-bottom: 25px;
  }
  .ongsSection {
    display: flex;
    flex-direction: column;
  }

  .ongsSection > .loading {
    position: absolute;
    bottom: 30px;
    left: 50%;
  }

  .ongsSection > div {
  }
  .searchSection {
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    gap: 2px;
  }

  form > input {
    border: 2px solid var(--Color-primary);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left: 5px;
    height: 35px;
    width: 220px;
    outline: none;
  }

  form > button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    background-color: var(--Color-primary);
    height: 100%;
    width: 25px;
  }
  .filterBtn {
    background-color: transparent;
    border: none;
  }
  .filterBtn > svg {
    width: 30px;
    height: 30px;
  }
  form > button > svg {
    color: var(--Withe);
  }
  .catogoriesFilterDiv {
    display: none;
  }
  .ongsList {
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;
    gap: 55px;
    border-radius: 8px;
  }
  .downPull {
    animation: pull linear 0.1s forwards;
  }
  .categoriesDiv {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
  }
  @keyframes pull {
    20% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
  .popUpFilters {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    height: 115px;
    margin-bottom: 0px;
    max-width: 100%;
  }

  span {
    color: var(--Color-primary);
  }

  .popUpFilters > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: auto;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    gap: 15px;
    max-width: 536px;
    width: 100%;
    margin: 0 auto;
  }

  button:disabled {
    opacity: 0.7;
  }
  .popUpFilters > ul > button {
    display: flex;
    align-items: center;
    height: 50px;
    width: fit-content;
  }
  .searchNotFound {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 0px 0px 25px 0px;
    justify-content: space-between;
    width: 100%;
    margin-top: 25px;
    gap: 20px;

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 6px;
      padding: 20px;
      height: max-content;
      gap: 20px;
      > h4 {
        height: fit-content;
      }
      > button {
        -webkit-box-shadow: 3px 3px 22px 2px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 3px 3px 22px 2px rgba(0, 0, 0, 0.5);
        box-shadow: 3px 3px 22px 2px rgba(0, 0, 0, 0.5);
        padding: 8px;
        border-radius: 6px;
        border: none;
        background-color: var(--Color-primary);
        color: var(--Withe);
      }
    }
  }
  .searchNotFound > h3 {
    width: 50%;
  }

  .searchNotFound > #notFoundImg {
    width: 200px;
  }
  .hidden {
    display: none;
  }
  .block {
    display: block;
  }
  @media (min-width: 768px) {
    .categoriesDiv {
      flex-direction: row;
      max-width: 700px;
    }

    .ongsList {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .searchDiv {
      width: fit-content;
      margin: 0;
    }
    .searchSection {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 25px;
      justify-content: space-between;
    }
    .filterBtn {
      display: none;
    }
    .popUpFilters {
      display: flex;
      gap: 25px;
      flex-direction: row;
      align-items: center;
      overflow: auto;
      max-width: 45vw;
      border-radius: 8px;
    }
    .popUpFilters > ul {
      max-width: 100%;
      margin: 0 auto;
    }

    .catogoriesFilterDiv {
      display: flex;
      gap: 25px;
      flex-direction: row;
      align-items: center;
      overflow: auto;
      max-width: 45vw;
      border-radius: 8px;
    }
    .catogoriesFilterDiv > span {
      height: fit-content;
    }

    .categoriesList {
      display: flex;
      flex-direction: row;
      gap: 15px;
      width: 100%;
    }

    .categoriesList > button {
      width: fit-content;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .block {
      display: block;
      margin: 0 auto;
    }
    .spanResponsive {
      display: block;
    }
  }
`;
