import { useContext, useEffect, useState } from "react";
import CoverProfile from "../../components/CoverProfile/CoverProfile";
import PencilLight from "../../assets/imgs/Pencil Light.svg";
import { ProfileOngStyled } from "./StyledProfileOngPage";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Modal } from "../../components/Modal/ModalGeneric/Modal";
import { ModalOng } from "../../components/Modal/ModalOng/ModalOng";
import NoUser from "../../assets/imgs/noUser.svg";
import HeaderFull from "../../components/HeaderFull/HeaderFull";
import { UserContext } from "../../contexts/UserContext/UserContext";
import Historic from "../../assets/imgs/Historic.svg";
import CatAstronaut from "../../assets/imgs/CatAstronaut.gif";

const ProfileOngPage = () => {
  const [click, setClick] = useState(true);
  const { userInfo } = useContext(AuthContext);
  const { historicDonates, historicDonatesOngMain } = useContext(UserContext);

  const totalPrice = historicDonates.reduce((acc, value) => {
    return acc + Number(value.value);
  }, 0);

  useEffect(() => {
    historicDonatesOngMain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <ProfileOngStyled>
      <HeaderFull linkText="ONGs" linkTo="/dashboard" />
      <CoverProfile imgCover={userInfo.background} imgUser={userInfo.avatar} />
      <div className="container">
        <div className="infoUser">
          <div className="InfoAndEdit">
            <h2>Informações</h2>
            <Modal
              title="Editar usuário"
              button={<img src={PencilLight} alt="" />}
            >
              <ModalOng/>
            </Modal>
          </div>
          <p className="name">
            Nome:<span className="spanName"> {userInfo.name}</span>
          </p>
          <p className="bio">Bio:</p>
          <div className="bioContainer">
            <span className={`spanBio ${click && "vanish"}`}>
              {`${userInfo.bio} `}
            </span>

            {userInfo.id && userInfo.bio!.length > 100 && (
              <button className="seeMore" onClick={() => setClick(!click)}>
                {click ? "Ver mais" : "Ver menos"}
              </button>
            )}
          </div>
        </div>
        <div className="totalContainer">
          <div className="totalDiv">
            <h3>
              Meta da ONG:
              <span>
                {userInfo.metas === 0 ? (
                  <p>Ainda não possui meta</p>
                ) : (
                  <>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(userInfo.metas!)}
                  </>
                )}
              </span>
            </h3>
            <div className="historic">
              <h3 className="total">
                Total:
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalPrice)}
                </span>
              </h3>
              <img src={Historic} alt="" />
            </div>
          </div>
          <div className="historicDonates">
            {historicDonates.length ? (
              <ul>
                {historicDonates?.map((historic, index) => (
                  <li key={index}>
                    {historic.public === false ? (
                      <div className="donorUser">
                        <img src={NoUser} alt="" />
                        <p>Usuário anônimo</p>
                      </div>
                    ) : (
                      <div className="donorUser">
                        {historic.user.avatar === "" ? (
                          <img src={NoUser} alt="" />
                        ) : (
                          <img src={historic.user.avatar} alt="" />
                        )}
                        <p>{historic.user.name}</p>
                      </div>
                    )}

                    <span>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(historic.value)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="noDonates">
                <img src={CatAstronaut} alt="" />
                <p>Ainda não possui doações!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProfileOngStyled>
  );
};

export default ProfileOngPage;
