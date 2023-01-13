import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { StyledLoadingPage } from "./StyledLoadingPage";
import logoWhite from "../../assets/imgs/LogoWhite.svg";

const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <img src={logoWhite} alt="Logo Onde tem Ong?" />
      <AiOutlineLoading3Quarters className="loading" />
    </StyledLoadingPage>
  );
};

export default LoadingPage;
