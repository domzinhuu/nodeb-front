import { useState } from "react";
import { LoginInput } from "./components/LoginInput";
import { LoginButton, LoginContainer, LoginForm } from "./styles";
import { LockKey, LockKeyOpen } from "phosphor-react";
import { Link } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <LoginContainer>
      <div className="content">
        <h1>Nodeb</h1>
        <p>Faça login para ter acesso a plataforma</p>

        <LoginForm>
          <LoginInput
            label="Login"
            name="username"
            useForm={true}
            gap={2}
            register={register}
          />
          <LoginInput
            label="Senha"
            name="password"
            secure={showPassword ? false : true}
            useForm={true}
            showIcon={true}
            register={register}
            icon={
              showPassword ? (
                <LockKeyOpen weight="fill" onClick={handleClickShowPassword} />
              ) : (
                <LockKey weight="fill" onClick={handleClickShowPassword} />
              )
            }
          />

          <LoginButton onClick={handleSubmit(handleLogin)}>Entrar</LoginButton>
          <Link to={"/"}>Esqueci minha senha</Link>
        </LoginForm>
      </div>
    </LoginContainer>
  );
}
