import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from "react";
import './custom-input.css'

export type InputProps = {
    id: string;
    label?: string
    className?: string;
  } & 
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  
const CustomInput: FC<InputProps> = ({id,label,className = 'input-field', ...props}) => {
      return (
        <div>
          {label ?? <div>{label}</div>}
          <input
            id={id}
            className={className}
            {...props}
          />
        </div>
      );
    };
  
  export default CustomInput