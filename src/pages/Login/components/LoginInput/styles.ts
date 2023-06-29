import { css, styled } from "styled-components";

interface LoginInputContainerProps {
  gap?: number;
}

export const LoginInputContainer = styled.div<LoginInputContainerProps>`
  padding-bottom: ${(props) => props.gap}rem;

  .inputGroup {
    text-align: left;
    width: 100%;
    height: 1.875rem;
    background: ${(props) => props.theme.white};
    position: relative;

    label {
      transition: all 0.1s;
      color: ${(props) => props.theme["gray-400"]};
      font-size: 1.125rem;
      line-height: 1.75rem;
      position: absolute;
    }

    input:focus + label,
    input:valid + label {
      transform: translateY(-25px);
      color: ${(props) => props.theme["purple-500"]};
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: bold;
    }

    svg {
      position: absolute;
      z-index: 10;
      right: 0;
      color: ${(props) => props.theme["gray-800"]};
      font-size: 1.5rem;
      line-height: 2rem;
      cursor: pointer;
      z-index: 2;
    }

    input {
      padding: 0.25rem;
      position: absolute;
      width: 100%;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
      outline: none;
      background: transparent;
      z-index: 1;
    }
  }
`;
