import { useContext } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RiErrorWarningLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AuthContext,
  iLoginData,
} from "../../contexts/AuthContext/AuthContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Error } from "../../components/Input/StyledInput";
import { StyledLink } from "../../components/StyledLink/StyledLink";
import User from "../../assets/imgs/User.svg";
import Logo from "../../assets/imgs/Logo.svg";
import UpLeft from "../../assets/imgs/Up Left.svg";
import Password from "../../assets/imgs/Password.svg";
import { StyledLoginPage } from "./StyledLoginPage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoginPage = () => {
  const { userLogin, loading } = useContext(AuthContext);

  const formSchemaLogin = yup.object({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <StyledLoginPage>
      <figure>
        <Link to="/">
          <img className="upLeftImage" src={UpLeft} alt="" />
        </Link>
      </figure>
      <div className="container">
        <h1 className="loginMobile">Login</h1>
        <div className="loginContainer">
          <h1>Login</h1>
          <StyledLink to="/" type="button">
            Voltar
          </StyledLink>
        </div>
        <div className="formContainer">
          <form autoComplete="off" onSubmit={handleSubmit(userLogin)}>
            <div
              className={
                errors.email ? "inputContainer error" : "inputContainer"
              }
            >
              <Input
                label="EMAIL"
                src={User}
                type="email"
                placeholder="Digite seu email"
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
                errors.password ? "inputContainer error" : "inputContainer"
              }
            >
              <Input
                label="SENHA"
                src={Password}
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && (
                <Error>
                  <RiErrorWarningLine size="20" className="ico" />
                  <span>{errors.password.message}</span>
                </Error>
              )}
            </div>
            <Button
              disabled={loading ? true : false}
              styled="filled"
              type="submit"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="loading" />
              ) : (
                "Entrar"
              )}
            </Button>
          </form>
          <span>Ainda não possui conta?</span>
          <StyledLink to="/register" type="button" className="registerButton">
            Cadastre-se
          </StyledLink>
        </div>
      </div>
      <img className="logoImage" src={Logo} alt="" />
    </StyledLoginPage>
  );
};

export default LoginPage;
