import { DetailedHTMLProps, FC, forwardRef, TextareaHTMLAttributes } from "react";
import './custom-text-area.css'

export type TextAreaProps = {
    id: string;
    label?: string
    className?: string;
  } & 
    DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  
const CustomTextArea: FC<TextAreaProps> = ({id,label,className = 'text-area-field',...props}) => {
      return (
        <div>
          {label ?? <div>{label}</div>}
          <textarea
            id={id}
            className={className}
            {...props}
          />
        </div>
      );
    }
  ;
  
  export default CustomTextArea