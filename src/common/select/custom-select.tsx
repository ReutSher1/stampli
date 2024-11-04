
import {  FC} from "react";
import './custom-select.css'

export type SelectProps = {
    id: string;
    options: string[];
    label?: string
    className?: string;
  } 
  
const CustomSelect: FC<SelectProps> = ({id,label,options,className = 'select-field'}) => {
      return (
        <div>
          {label ?? <div>{label}</div>}
          <select
            id={id}
            className={className}
          >
            {options.map(option =>(<option key ={`${id},${option}`} value={option} label={option}/>))}
          </select>
        </div>
      );
    }
  ;
  
  export default CustomSelect