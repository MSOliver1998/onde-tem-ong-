import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iPropsStyledLink {
  type: "button" | "link" | "filled" | "button empty";
}

export const StyledLink = styled(Link)<iPropsStyledLink>`
  text-decoration: none;
  ${({ type }) => {
    switch (type) {
      case "button":
        return css`
          border: 1px solid var(--Color-primary);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          width: max-content;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 400;
          color: var(--Color-primary);
        `;
      case "link":
        return css`
          font-size: 20px;
          font-weight: 600;
          color: var(--Black50);
          border-bottom: 2px solid var(--Black50);
        `;
      case "filled":
        return css`
          border: 1px solid #d9d9d9;
          background: #d9d9d9;
          color: var(--Grey50);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          width: max-content;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 500;
          -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.26);
          -moz-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.26);
          box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.26);
        `;
      case "button empty":
        return css`
          border: 1px solid var(--Withe);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 400;
          color: var(--Withe);
        `;
    }
  }}
`;
