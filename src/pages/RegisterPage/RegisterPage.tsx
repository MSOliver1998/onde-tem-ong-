import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { StyledRegisterPage } from "./StyledRegisterPage";
import UserLight from "../../assets/imgs/User Light.svg";
import PasswordLight from "../../assets/imgs/Password Light.svg";
import PencilLight from "../../assets/imgs/Pencil Light.svg";
import LogoWhite from "../../assets/imgs/LogoWhite.svg";
import { RiErrorWarningLine } from "react-icons/ri";
import { Error } from "../../components/Input/StyledInput";
import Button from "../../components/Button/Button";
import { StyledLink } from "../../components/StyledLink/StyledLink";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface iRegisterData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  userType: "ownerOng" | "user";
  category: string;
  bio: string;
}

const RegisterPage = () => {
  const [typeUser, setTypeUser] = useState("");

  const { registerSubmit, loading } = useContext(AuthContext);

  const RegisterSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("A confirmação de senha é obrigatória")
      .oneOf([yup.ref("password")], "As senhas precisam coincidir"),
    userType: yup.string().required("O tipo é obrigatório"),
    category: yup.string().when("userType", {
      is: "ownerOng",
      then: yup.string().required("A categoria é obrigatória"),
      otherwise: yup.string(),
    }),
    bio: yup.string().when("userType", {
      is: "ownerOng",
      then: yup
        .string()
        .required("A bio é obrigatória")
        .min(200, "É necessário no mínimo 200 caracteres"),
      otherwise: yup.string(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(RegisterSchema),
  });

  return (
    <StyledRegisterPage>
      <div className="background">
        <main className="container">
          <div className="formContainer">
            <div className="RegisterAndTitle">
              <div className="RegisterMobile">
                <h1 className="titleRegister">Cadastro</h1>
              </div>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit(registerSubmit)}>
              <div className="divBlockLeft">
                <div
                  className={
                    errors.email ? "inputContainer error" : "inputContainer"
                  }
                >
                  <Input
                    styledColor="Withe"
                    label="EMAIL"
                    src={UserLight}
                    id="email"
                    type="email"
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <Error>
                      <RiErrorWarningLine size="20" className="ico" />
                      <span>{errors.email.message}</span>
                    </Error>
                  )}
                </div>
                <div
                  className={
                    errors.name ? "inputContainer error" : "inputContainer"
                  }
                >
                  <Input
                    styledColor="Withe"
                    label="NOME - DOADOR OU ONG"
                    src={PencilLight}
                    id="name"
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                  />
                  {errors.name && (
                    <Error>
                      <RiErrorWarningLine size="20" className="ico" />
                      <span>{errors.name.message}</span>
                    </Error>
                  )}
                </div>
                <div
                  className={
                    errors.password ? "inputContainer error" : "inputContainer"
                  }
                >
                  <Input
                    styledColor="Withe"
                    label="SENHA"
                    src={PasswordLight}
                    id="password"
                    type="password"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                  />
                  {errors.password && (
                    <Error>
                      <RiErrorWarningLine size="20" className="ico" />
                      <span>{errors.password.message}</span>
                    </Error>
                  )}
                </div>
                <div
                  className={
                    errors.confirmPassword
                      ? "inputContainer error"
                      : "inputContainer"
                  }
                >
                  <Input
                    styledColor="Withe"
                    label="REPITA A SENHA"
                    src={PasswordLight}
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <Error>
                      <RiErrorWarningLine size="20" className="ico" />
                      <span>{errors.confirmPassword.message}</span>
                    </Error>
                  )}
                </div>

                <label className="labelSelectType" htmlFor="">
                  SELECIONE TIPO DE USUÁRIO
                </label>
                <div className="selectTypeUser">
                  <Input
                    styledColor="placeholderInputRegister"
                    className="inputRadio"
                    src={UserLight}
                    label="Doador"
                    id="user"
                    type="radio"
                    value="user"
                    {...register("userType")}
                    onChange={(event) => setTypeUser(event.target.value)}
                  />
                  <Input
                    styledColor="placeholderInputRegister"
                    className="inputRadio"
                    src={UserLight}
                    label="ONG"
                    id="ownerOng"
                    type="radio"
                    value="ownerOng"
                    {...register("userType")}
                    onChange={(event) => setTypeUser(event.target.value)}
                  />
                </div>
              </div>
              <div className="divBlockRight">
                {typeUser === "ownerOng" ? (
                  <div className="divSelectCategory">
                    <select
                      id="category"
                      {...register("category")}
                      className={errors.category && "errorSelect"}
                    >
                      <option value="">Selecionar categoria</option>
                      <option value="seguranca alimentar">
                        Segurança Alimentar
                      </option>
                      <option value="Cultura">Cultura</option>
                      <option value="Saúde">Saúde</option>
                      <option value="Meio Ambiente">Meio Ambiente</option>
                      <option value="Desenvolvimento e defesa de direitos">
                        Desenvolvimento e defesa de direitos
                      </option>
                      <option value="Habitação">Habitação</option>
                      <option value="Animais">Animais</option>
                      <option value="Povos nativos">Povos nativos</option>
                      <option value="Tecnologia">Tecnologia</option>
                      <option value="Animais">Animais</option>
                    </select>
                    <div
                      className={
                        errors.bio ? "inputContainer error" : "inputContainer"
                      }
                    >
                      <Input
                        styledColor="Grey100"
                        label="BIO"
                        src={PencilLight}
                        id="bio"
                        type="text"
                        placeholder="Descreva sua ONG"
                        {...register("bio")}
                      />
                      {errors.bio && (
                        <Error>
                          <RiErrorWarningLine size="20" className="ico" />
                          <span>{errors.bio.message}</span>
                        </Error>
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <Button
                  disabled={loading ? true : false}
                  styled="filled"
                  type="submit"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="loading" />
                  ) : (
                    "Cadastrar"
                  )}
                </Button>
                <span>Já possui uma conta?</span>
                <StyledLink type="button empty" to="/login">
                  Login
                </StyledLink>
                <img src={LogoWhite} alt="" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
