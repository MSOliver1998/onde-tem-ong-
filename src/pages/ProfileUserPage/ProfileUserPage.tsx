import { useContext, useEffect, useState } from "react";
import CoverProfile from "../../components/CoverProfile/CoverProfile";
import HeaderFull from "../../components/HeaderFull/HeaderFull";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { StyledProfileUser } from "./StyledProfileUser";
import PencilBlack from "../../assets/imgs/PencilBlack.svg";
import Historic from "../../assets/imgs/Historic.svg";
import { UserContext } from "../../contexts/UserContext/UserContext";
import NoUser from "../../assets/imgs/noUser.svg";
import { Modal } from "../../components/Modal/ModalGeneric/Modal";
import { ModalUser } from "../../components/Modal/ModalUser/ModalUser";
import { MdOutlineAttachMoney as MoneyTotal } from "react-icons/md";
import { Link } from "react-router-dom";

const ProfileUserPage = () => {
  const { userInfo } = useContext(AuthContext);
  const { userDonate, getDonateUser } = useContext(UserContext);
  const [click, setClick] = useState(true);
  const [viewTotal, setViewTotal] = useState(true);

  const totalPrice = userDonate.reduce((acc, value) => {
    return acc + Number(value.value);
  }, 0);

  useEffect(() => {
    getDonateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <StyledProfileUser>
      <HeaderFull linkText={"ONGs"} linkTo={"/dashboard"} />
      <CoverProfile imgCover={userInfo.background} imgUser={userInfo.avatar} />
      <div className="infoUser container">
        <div className="infoEdit">
          <h3 className="name">Nome: {userInfo.name}</h3>
          <Modal
            title="Editar usuário"
            button={<img src={PencilBlack} alt="" />}
          >
            <ModalUser data={userInfo} />
          </Modal>
        </div>
        <div className="historicDonates">
          <div>
            <img src={Historic} alt="" />
            <h2>Histórico de Doações</h2>
          </div>

          <div className="viewTotal" onClick={() => setViewTotal(!viewTotal)}>
            {viewTotal ? (
              <div className="seeTotal">
                <p>Ver total doado</p>
                <MoneyTotal className="money" />
              </div>
            ) : (
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </span>
            )}
          </div>
        </div>
        {userDonate.length === 0 ? (
          <div className="noDonate">
            <h4>Você ainda não realizou nenhuma doação!</h4>
            <Link to={"/dashboard"} className="goToProfile">
              Clique aqui para realizar sua primeira doação
            </Link>
          </div>
        ) : (
          <ul>
            {userDonate.map((donate, index) => (
              <li className="donationCard" key={index}>
                {donate.ong.avatar === "" ? (
                  <img className="imgOng" src={NoUser} alt="" />
                ) : (
                  <img className="imgOng" src={donate.ong.avatar} alt="" />
                )}
                <div className="infoOng">
                  <div>
                    <h3>{donate.ong.name}</h3>
                    <p>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(donate.value)}
                    </p>
                  </div>
                  <span className={`spanBio ${click && "vanish"}`}>
                    {`${donate.ong.bio} `}
                  </span>
                  {donate.ong.bio!.length > 100 && (
                    <button
                      className="seeMore"
                      onClick={() => setClick(!click)}
                    >
                      {click ? "Ver mais" : "Ver menos"}
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledProfileUser>
  );
};

export default ProfileUserPage;
