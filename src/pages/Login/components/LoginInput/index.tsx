import { ReactNode, useState } from "react";
import { LoginInputContainer } from "./styles";
import { UseFormRegister } from "react-hook-form";

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
  register: UseFormRegister<any>;
  onChange?: (el: any) => void;
}

export function LoginInput(props: LoginInputProps) {
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  return (
    <LoginInputContainer gap={props.gap}>
      <div className="inputGroup">
        <input
          id={props.id}
          type={props.secure ? "password" : "text"}
          {...props.register(props.name)}
          required
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          className={`p-1 absolute w-full border-b border-b-gray-400 outline-none bg-transparent ${props.inputClass}`}
        />
        <label
          className={`transition-all duration-100  text-gray-400 text-lg absolute ${
            (hasFocus || props.value) &&
            "translate-y-[-25px] text-purple-800 text-sm"
          }`}
        >
          {props.name}
        </label>
        
        {props.showIcon && props.icon}
      </div>
    </LoginInputContainer>
  );
}
