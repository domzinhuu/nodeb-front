import { ReactNode, useState } from "react";
import { LoginInputContainer } from "./styles";

interface LoginInputProps {
  id?: string;
  name: string;
  label?: string;
  secure?: boolean;
  className?: string;
  inputClass?: string;
  showIcon?: boolean;
  icon?: ReactNode;
  value?: any;
  useForm?: boolean;
  gap?: number;
  onChange?: (el: any) => void;
}

export function LoginInput(props: LoginInputProps) {
  const [hasFocus, setHasFocus] = useState(false);
  return (
    <LoginInputContainer gap={props.gap} hasFocus={hasFocus || props.value}>
      <div className="inputGroup">
        <label
          className={`transition-all duration-100  text-gray-400 text-lg absolute ${
            (hasFocus || props.value) &&
            "translate-y-[-25px] text-purple-800 text-sm"
          }`}
        >
          {props.name}
        </label>

        <input
          id={props.id}
          type={props.secure ? "password" : "text"}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onFocus={(e) => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          className={`p-1 absolute w-full border-b border-b-gray-400 outline-none bg-transparent ${props.inputClass}`}
        />
        {props.showIcon && props.icon}
      </div>
    </LoginInputContainer>
  );
}
