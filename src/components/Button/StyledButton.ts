import styled, { css } from "styled-components";

interface iPropsStyledButton {
  styled: "filled" | "empty" | "empty curved" | "filled curved";
}

export const StyledButton = styled.button<iPropsStyledButton>`
  outline: none;

  ${({ styled }) => {
    switch (styled) {
      case "filled":
        return css`
          width: 100%;

          padding: 15px 20px;

          border: 1px solid transparent;
          border-radius: 8px;

          color: white;
          background-color: var(--Color-primary);
          font-size: var(--font16);
          font-weight: 500;
        `;
      case "empty":
        return css`
          padding: 18px 36px;
          border: 1px solid var(--Color-primary);
          color: var(--Color-primary);
          border-radius: 8px;
          font-size: var(--font16);
          font-weight: 500;
          background: transparent;
        `;
      case "empty curved":
        return css`
          padding: 10px 30px;
          border: 1px solid var(--Color-primary);
          color: var(--Color-primary);
          border-radius: 50px;
          font-size: var(--font16);
          font-weight: 500;
          background: transparent;
        `;
      case "filled curved":
        return css`
          padding: 10px 30px;
          border: 1px solid var(--Color-primary);
          color: var(--Withe);
          border-radius: 50px;
          font-size: var(--font16);
          font-weight: 500;
          background: var(--Color-primary);
        `;
    }
  }}
`;
