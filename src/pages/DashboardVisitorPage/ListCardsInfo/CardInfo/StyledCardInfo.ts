import styled from "styled-components";

interface iStyledCardInfo {
  Image: {
    img: string;
    img2: string;
  };
}

export const StyledCardInfo = styled.li<iStyledCardInfo>`
  width: 100%;
  height: min-content;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  background-color: var(--Withe);

  padding: 15px;
  border: 2px solid var(--Color-primary);
  border-radius: 8px;

  .conteinerDivHome {
    border-radius: 8px 8px 0 0;

    height: min-content;
    @media (min-width: 900px) {
      background: none;
      box-shadow: none;

      width: 300px;

      border-radius: 0;
      .imgH {
        width: 100%;
        border-radius: 0;
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 300px;

    margin-bottom: 30px;

    border-radius: 8px 8px 0 0;
  }

  p {
    width: 95%;
    text-align: center;

    font-size: var(--font14);
  }
  .imgT {
    background-image: url(${({ Image }) => Image.img});
    background-repeat: no-repeat;
    background-size: contain;

    border-radius: 8px 8px 0 0;

    width: 230px;
    height: 220px;

    @media (min-width: 900px) {
      width: 250px;
      background-size: contain;
      border-radius: 8px;
      margin: 15px 0 15px 15px;
    }
  }

  .imgH {
    background-image: url(${({ Image }) => Image.img2});
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 8px 8px 0 0;

    height: 250px;
    width: 100%;
  }

  @media (min-width: 900px) {
    flex-direction: row;

    padding: 0;

    box-shadow: none;
    background-color: var(--Withe);

    img {
      margin: 0 1rem 0 1rem;
    }

    p {
      margin: 0 1rem 0 1rem;
    }
  }
`;
