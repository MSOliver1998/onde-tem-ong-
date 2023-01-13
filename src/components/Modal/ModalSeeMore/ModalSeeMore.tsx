import { useContext, useEffect, useState } from "react";
import {iOngDonate,UserContext} from "../../../contexts/UserContext/UserContext";
import { StyledModalSeeMore } from "./StyledModalSeeMore";
import noBackground from "../../../assets/imgs/noBackgroundUser.jpg";
import noUserProfileUser from "../../../assets/imgs/noUserProfileUser.jpg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { api } from "../../../services/api";

interface iPropsModalSeeMore {
  ongId: number;
  imageHandler: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const ModalSeeMore = ({ ongId, imageHandler }: iPropsModalSeeMore) => {
  const { getInfoOng, ong, userLoading } = useContext(UserContext);
  const [historic, setHistoric] = useState<iOngDonate[] | null>(null);

  const getHistoric = async () => {
    try {
      const response = await api.get(`/ong/donates/${ongId}`);
      setHistoric(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfoOng(ongId);
    getHistoric();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledModalSeeMore>
      {userLoading ? (
        <AiOutlineLoading3Quarters className="loading" />
      ) : (
        <>
          <div className="pics">
            <img
              onError={(e) => imageHandler(e)}
              src={ong?.background ? ong.background : noBackground}
              alt="Plano de fundo do usuário"
              className="backgroundPic"
            />
            <img
              onError={(e) => imageHandler(e)}
              src={ong?.avatar ? ong?.avatar : noUserProfileUser}
              alt="Foto de perfil do usuário"
              className="profilePic"
            />
          </div>
          <div className="infos">
            <div className="infosLeft">
              <h3 className="title">Detalhes</h3>
              <h2>
                Nome: <span className="name">{ong?.name}</span>
              </h2>
              <div className="bioDiv">
                <h2>Bio: </h2>
                <p>{ong?.bio}</p>
              </div>
            </div>
            <div className="infosRight">
              <h2>Histórico de doações: </h2>
              {historic ? (
                <ul>
                  {historic.map((donation) => (
                    <li key={donation.id}>
                      {donation.public === false ? (
                        <div className="donorUser">
                          <img src={noUserProfileUser} alt="" />
                          <p>Usuário anônimo</p>
                        </div>
                      ) : (
                        <div className="donorUser">
                          {donation.user.avatar === "" ? (
                            <img
                              src={noUserProfileUser}
                              alt="Foto de perfil do usuário"
                            />
                          ) : (
                            <img
                              onError={(e) => imageHandler(e)}
                              src={
                                donation.user.avatar
                                  ? donation.user.avatar
                                  : noUserProfileUser
                              }
                              alt="Foto de perfil do usuário"
                            />
                          )}
                          <p>{donation.user.name}</p>
                        </div>
                      )}

                      <span>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(donation.value)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <AiOutlineLoading3Quarters className="loading" />
              )}
            </div>
          </div>
        </>
      )}
    </StyledModalSeeMore>
  );
};
