import styled from "styled-components";

export const StyledHeaderFull = styled.div`
  height: 84px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;

  > div {
    width: 100%;
    -webkit-box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Withe);
    z-index: 5;
  }

  header {
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 15px;
    padding: 10px 0;
    background: var(--Withe);
    align-items: center;
    position: relative;
  }

  header > div > a > img {
    cursor: pointer;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
  }

  .downMenu {
    border: 2px solid var(--Color-primary);
    position: absolute;
    width: 35%;
    min-width: 250px;
    top: 50px;
    right: 15px;
    display: none;
    border-radius: 8px;
    padding: 10px;
    background: var(--Withe);
    display: none;
    flex-direction: column;
    gap: 10px;
    -webkit-box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 26px -12px rgba(0, 0, 0, 0.75);
  }

  .downMenu > .goToProfile {
    border-bottom: 1px solid var(--Black50);
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    text-decoration: none;
    color: black;
    width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .downMenu > .goToProfile > img {
    width: 30px;
    object-fit: cover;
  }

  .downMenu > .dynamicLink {
    font-size: var(--font16);
    color: var(--Color-primary);
    border: 2px solid var(--Color-primary);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--Color-terciary);
  }

  header > div:hover > .downMenu {
    display: flex;
  }
`;
