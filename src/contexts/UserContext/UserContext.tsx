import { createContext, useState } from "react";
import { api } from "../../services/api";


interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContextProps {
  historicDonates: iOngDonate[];
  userDonate: iUserDonate[];
  getDonateUser: () => Promise<void>;
  historicDonatesOngMain: () => Promise<void>;
  getInfoOng: (ongId: number) => Promise<void>;
  ong: iOng | null;
  userLoading: boolean;
  setHistoricDonates: React.Dispatch<React.SetStateAction<iOngDonate[]>>;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iOng {
  name: string;
  userID: number;
  bio?: string;
  category: string;
  id: number;
  background: string;
  avatar: string;
  email?: string;
  metas?: number;
  password?: string;
  userType?: string;
}

export interface iOngDonate {
  public: boolean;
  value: number;
  id: number;
  user: { userId: number; name: string; avatar: string };
  ong: { ongId: number; name: string; avatar: string };
}

export interface iUserDonate {
  public: boolean;
  value: number;
  id: number;
  user: { userId: number; name: string; avatar: string };
  ong: { ongId: number; name: string; avatar: string; bio: string };
}

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProvider) => {
  const [historicDonates, setHistoricDonates] = useState([] as iOngDonate[]);
  const [userDonate, setUserDonate] = useState([] as iUserDonate[]);
  const [ong, setOng] = useState<null | iOng>(null);
  const [userLoading, setUserLoading] = useState(false);

  const historicDonatesOngMain = async () => {
    const token = localStorage.getItem("@token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const idOng = localStorage.getItem("@id");
      const response = await api.get(`/ong/donates/${idOng}`);
      setHistoricDonates(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getInfoOng = async (ongId: number) => {
    setUserLoading(true);
    try {
      const response = await api.get(`/users/${ongId}`);
      setOng(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const getDonateUser = async () => {
    const token = localStorage.getItem("@token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const id = localStorage.getItem("@id");
      const response = await api.get(`/user/donates/${id}`);
      setUserDonate(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        historicDonates,
        userDonate,
        getDonateUser,
        historicDonatesOngMain,
        getInfoOng,
        ong,
        userLoading,
        setHistoricDonates,
        setUserLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
