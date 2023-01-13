import React, { createContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { api } from "../../services/api";
import { iRegisterData } from "../../pages/RegisterPage/RegisterPage";
import { toast } from "react-toastify";

interface iAuthProvider {
  children: React.ReactNode;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iUserInfo {
  bio: string;
  category?: string;
  background: string;
  avatar: string;
  email: string;
  id: number;
  name: string;
  userType: string;
  metas?: number;
}

interface iAuthContextProps {
  userLogin: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  loading: boolean;
  userInfo: iUserInfo;
  logout: () => void;
  navigate: NavigateFunction;
  updateProfile: (data: any) => Promise<void>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  loadingButton: boolean;
  setLoadingButton:React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext({} as iAuthContextProps);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [userInfo, setUserInfo] = useState({} as iUserInfo);
  const [loading, setLoading] = useState(false);
  const [openModal,setOpenModal]=useState(false)
  const [loadingButton, setLoadingButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true);
      const token = localStorage.getItem("@token");
      const id = localStorage.getItem("@id");
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      if (!token && !id) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get(`/users/${id}`);
        setUserInfo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUserInfo();
  }, []);

  const logout = () => {
    setUserInfo({} as iUserInfo);
    localStorage.clear();
    navigate("/");
  };

  const userLogin: SubmitHandler<iLoginData> = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/login", data);
      navigate("/dashboard");
      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@id", response.data.user.id);
      setUserInfo(response.data.user);
      toast.success("Login realizado com sucesso!");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit = async (data: iRegisterData) => {
    setLoading(true);
    try {
      const response = await api.post(
        "/users",
        data.userType === "ownerOng" ? { ...data, metas: 0 } : data
      );
      localStorage.clear();
      localStorage.setItem("USERID", response.data.accessToken);
      toast.success("Usuário criado com sucesso!");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: iUserInfo) => {
    const userId = localStorage.getItem("@id");
    const token = localStorage.getItem("@token");
    setLoadingButton(true);
    try {
      const response = await api.patch(`/users/${userId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const responseData: iUserInfo = response.data;
      setUserInfo(responseData);
      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error('não foi possivel atualizar o perfil')
    } finally {
      setLoadingButton(false);
      setOpenModal(false)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        registerSubmit,
        userInfo,
        loading,
        logout,
        navigate,
        updateProfile,
        openModal,
        setOpenModal,
        loadingButton,
        setLoadingButton
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}