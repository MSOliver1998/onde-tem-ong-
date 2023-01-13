import styled from "styled-components";

export const StyledProfileUser = styled.div`
  width: 100vw;

  .infoUser {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .iconEdit {
    height: 30px;
    width: 30px;
  }
  .infoEdit,
  .historicDonates,
  li {
    padding: 20px;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .infoEdit {
    margin-bottom: 20px;
  }

  .donationCard {
    margin: 20px 0px;
    padding: 10px 20px;
    background: var(--White);
    border-radius: 8px 8px 0px 0px;
    transition: 3s ease;
    border: 1px solid transparent;
    border-bottom: 1px solid var(--Color-primary);
  }

  .imgOng {
    margin: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transition: 3s ease;
  }
  .donationCard:hover {
    background: var(--Color-terciary);
    border: 1px solid var(--Color-primary);
  }

  .infoOng {
    width: 80%;
  }
  .infoOng > div {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .historicDonates > div {
    display: flex;
    gap: 20px;
  }

  .spanBio {
    margin-top: 20px;
    font-size: var(--font16);
    font-weight: 400;
  }

  .vanish {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .seeMore {
    border: none;

    text-decoration: underline;

    color: var(--Information);
    background: none;
  }

  .seeTotal {
    cursor: pointer;
    display: flex;
    align-items: center;
    p {
      font-weight: 600;
    }

    .money {
      width: 30px;
      height: 30px;
    }
  }
  .noDonate {
    background-color: var(--Color-terciary);
    padding: 20px;
    margin-top: 30px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    .historicDonates {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 375px) {
    .infoOng {
      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;
