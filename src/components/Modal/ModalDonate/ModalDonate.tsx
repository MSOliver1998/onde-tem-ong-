import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormDonateStyled } from "./ModalDonateStyled";
import { DonateSchema } from "./ModalDonateSchema";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { api } from "../../../services/api";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface iDonate {
  value: number;
  public: string;
}

interface iProps {
  ongId: number;
}

export const ModalDonate = ({ongId}: iProps) => {
  const { userInfo,loadingButton,setLoadingButton,setOpenModal } = useContext(AuthContext);
  const { getInfoOng, ong } =
    useContext(UserContext);

  useEffect(() => {
    getInfoOng(ongId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDonate>({
    resolver: yupResolver(DonateSchema),
  });

  async function submit(data: iDonate) {
    setLoadingButton(true);
    try {
      const token=localStorage.getItem('@token')
      await api.post("/donates", {
        ong: {
          ongId: ong?.id,
          name: ong?.name,
          avatar: ong?.avatar ? ong.avatar : "",
          bio: ong?.bio,
        },
        user: {
          userId: userInfo.id,
          name: userInfo.name,
          avatar: userInfo.avatar,
        },
        value: data.value,
        public: data.public === "yes" ? false : true,
      },{
        headers:{
          authorization: `Bearer ${token}` 
        }
      });

      toast.success("Doação realizada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error('não foi possivel fazer a doação')
    } finally {
      setLoadingButton(false);
      setOpenModal(false)
    }
  }

  return (
    <div>
      <FormDonateStyled onSubmit={handleSubmit(submit)}>
        <div className="valueDiv">
          <label htmlFor="donate">Valor R$:</label>
          <input
            id="donate"
            required
            type="number"
            min={0}
            placeholder="Valor"
            {...register("value")}
          />
          {errors.value?.message && <p>{errors.value.message}</p>}
        </div>
        <div className="radioFieldDiv">
          <label>Deseja doar anonimamente? </label>
          <div className="radios">
            <div>
              <label htmlFor="yes">Sim</label>
              <input
                type="radio"
                id="yes"
                value="yes"
                {...register("public")}
              />
              {errors.public?.message && <p>{errors.public.message}</p>}
            </div>
            <div>
              <label htmlFor="no">Não</label>
              <input type="radio" id="no" value="no" {...register("public")} />
            </div>
          </div>
        </div>
        <button
          className="donateButton"
          disabled={loadingButton}
          id={String(ongId)}
        >
          {loadingButton ? (
            <AiOutlineLoading3Quarters className="loading" />
          ) : (
            "Doar"
          )}
        </button>
      </FormDonateStyled>
    </div>
  );
};
