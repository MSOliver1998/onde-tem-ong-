import { InputHTMLAttributes, forwardRef } from "react";
import { StyledInput } from "./StyledInput";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  styledColor?: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, src, alt, placeholder, styledColor, ...rest }, ref) => {
    return (
      <StyledInput styledColor={styledColor ? styledColor : false}>
        <label>{label}</label>
        <div>
          <img src={src} alt={alt} />
          <input placeholder={placeholder} ref={ref} {...rest} />
        </div>
      </StyledInput>
    );
  }
);

export default Input;
