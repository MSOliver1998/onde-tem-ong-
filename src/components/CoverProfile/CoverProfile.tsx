import CoverDefault from "../../assets/imgs/noBackgroundUser.jpg";
import UserDefault from "../../assets/imgs/noUserProfileUser.jpg";
import { CoverProfileStyled } from "./StyledCoverProfile";

interface ICoverProfile {
  imgCover?: string;
  imgUser?: string;
}
const CoverProfile = ({ imgCover, imgUser }: ICoverProfile) => {
  return (
    <CoverProfileStyled>
      {<img src={imgCover || CoverDefault} alt="Img Cover" />}
      <div className="imgUser">
        {<img src={imgUser || UserDefault} alt="Img User" />}
      </div>
    </CoverProfileStyled>
  );
};

export default CoverProfile;
