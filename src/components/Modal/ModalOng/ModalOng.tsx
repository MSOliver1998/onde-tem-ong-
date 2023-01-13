import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { FormEditOngStyled } from "./ModalOngStyled";
import { OngSchema } from "./ModalOngSchema";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface iOng {
  name: string;
  bio?: string;
  avatar?: string;
  background?: string;
  id: number;
  metas?: number;
}

export const ModalOng = () => {
  const { updateProfile, userInfo, loadingButton } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iOng>({
    resolver: yupResolver(OngSchema),
  });

  return (
    <div>
      <FormEditOngStyled onSubmit={handleSubmit(updateProfile)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            defaultValue={userInfo.name}
            placeholder="Nome"
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            defaultValue={userInfo.bio}
            placeholder="Bio"
            {...register("bio")}
          />
          {errors.bio?.message && <p>{errors.bio?.message}</p>}
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input
            type="url"
            id="avatar"
            defaultValue={userInfo.avatar}
            placeholder="Avatar"
            {...register("avatar")}
          />
          {errors.avatar?.message && <p>{errors?.avatar?.message}</p>}
        </div>
        <div>
          <label htmlFor="background">Background</label>
          <input
            type="url"
            id="background"
            defaultValue={userInfo.background}
            placeholder="Background"
            {...register("background")}
          />
          {errors.background?.message && <p>{errors?.background?.message}</p>}
        </div>
        <div>
          <label htmlFor="metas">Meta</label>
          <input
            type="number"
            id="metas"
            defaultValue={userInfo.metas}
            placeholder="Metas (R$)"
            {...register("metas")}
          />
          {errors.background?.message && <p>{errors?.background?.message}</p>}
        </div>
        <button
          disabled={loadingButton}
          className="submitEditOngBtn"
          type="submit"
        >
          {loadingButton ? (
            <AiOutlineLoading3Quarters className="loading" />
          ) : (
            "Editar"
          )}
        </button>
      </FormEditOngStyled>
    </div>
  );
};
