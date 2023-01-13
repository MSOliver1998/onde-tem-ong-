import styled from "styled-components";

export const CoverProfileStyled = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  transition: 2s;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .imgUser {
    position: absolute;
    top: 160px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 3px 0px 38px -1px rgba(0, 0, 0, 0.75);
    transition: 2s;
  }

  .imgUser > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    height: 270px;
    transition: 2s;

    .imgUser {
      width: 210px;
      height: 210px;
      transition: 2s;
    }
  }
`;
