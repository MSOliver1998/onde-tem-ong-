import styled from "styled-components";

export const StyledListCardsInfo = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 40px;

  h3 {
    width: 90%;
    margin-bottom: 20px;

    font-size: 1.5rem;
    font-weight: 700;
    color: var(--Color-primary-50);
  }
  .motionInfo {
    width: 90%;
  }
`;
