import { styled } from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;

  div.content {
    min-width: 500px;
    width: 100%;
    background: ${(props) => props.theme["white"]};
    border-radius: 6px;
    padding: 3rem;
    text-align: center;

    h1 {
      padding-bottom: 0.5rem;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 3.75rem;
      background-image: linear-gradient(
        to right,
        ${(props) => props.theme["purple-500"]},
        #4ade80
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    p{
      padding-bottom: 1rem;
    }
  }
`;

export const LoginForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LoginButton = styled.button`
  background-color: ${(props) => props.theme["purple-600"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2rem;
  font-size: 0.875rem;
  padding: 0.75rem;
  border-radius: 6px;
  transition: all 0.2s;
  border: 0;
  cursor: pointer;
`;
