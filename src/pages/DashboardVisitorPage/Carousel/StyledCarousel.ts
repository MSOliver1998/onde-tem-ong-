import styled from "styled-components";

export const StyledCarousel = styled.div`
  display: flex;

  gap: 1rem;

  .inner {
    height: min-content;

    display: flex;
    justify-content: flex-start;

    overflow: hidden;
    scroll-behavior: smooth;

    gap: 2rem;

    transition: 0.3s;
  }
  .iten {
    min-width: 120px;
    min-height: 120px;

    max-width: 300px;
    max-height: 300px;

    border-radius: 8px;

    pointer-events: none;

    @media (min-width: 600px) {
      min-width: 180px;
      min-height: 180px;
    }

    @media (min-width: 800px) {
      min-width: 200px;
      min-height: 200px;
    }
    @media (min-width: 900px) {
      min-width: 220px;
      min-height: 220px;
    }

    @media (min-width: 900px) {
      min-width: 300px;
      min-height: 300px;
    }
  }

  li {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;

      border-radius: 8px;
    }
  }
`;
