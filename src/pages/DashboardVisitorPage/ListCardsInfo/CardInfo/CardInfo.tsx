import homePurple from "../../../../assets/imgs/Logo.png";
import transparencia from "../../../../assets/imgs/transparencia.png";
import { StyledCardInfo } from "./StyledCardInfo";

interface iCardInfo {
  title: string;
  className: string;
  text: string;
}

export const CardInfo = ({ title, className, text }: iCardInfo) => {
  const Image = {
    img: homePurple,
    img2: transparencia,
  };
  return (
    <>
      <h3 id={title === "Quem somos?" ? "quemSomos" : "transparencia"}>
        {title}
      </h3>
      <StyledCardInfo Image={Image} className="card">
        <div className="conteinerDivHome">
          <div className={className}></div>
        </div>
        <p>{text}</p>
      </StyledCardInfo>
    </>
  );
};
