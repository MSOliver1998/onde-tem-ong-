import styled from "styled-components";

export const StyledLoadingPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Color-primary);
  flex-direction: column;
  gap: 70px;

  > .loading {
    width: 70px;
    height: 70px;
    color: var(--Withe);
  }
`;
