import { useState } from "react";
import { LoginInput } from "./components/LoginInput";
import { LoginButton, LoginContainer, LoginForm } from "./styles";
import { LockKey, LockKeyOpen } from "phosphor-react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <LoginContainer>
      <div className="content">
        <h1>Nodeb</h1>
        <p>Faça login para ter acesso a plataforma</p>

        <LoginForm>
          <LoginInput label="Login" name="username" useForm={true} />
          <LoginInput
            label="Senha"
            name="password"
            secure={showPassword ? false : true}
            useForm={true}
            showIcon={true}
            icon={
              showPassword ? (
                <LockKeyOpen weight="fill" onClick={handleClickShowPassword} />
              ) : (
                <LockKey weight="fill" onClick={handleClickShowPassword} />
              )
            }
          />

          <LoginButton>Entrar</LoginButton>
          <Link to={"/"}>
            Esqueci minha senha
          </Link>
        </LoginForm>
      </div>
    </LoginContainer>
  );
}
