import { ReactNode } from "react";
import CustomInput from "../common/input/custom-input";
import CustomSelect from "../common/select/custom-select";
import { groupBy } from "../utils/groupBy";
import { DisplayElement, ElementType } from "../types/element";
import "./form.css"


interface FormProps{
    elements: DisplayElement[]
}


const elementRecord: Record<ElementType, (props: any ) => ReactNode> ={
    [ElementType.SELECT]: (props: DisplayElement)=>(<CustomSelect id={`${props.column},${props.line}`} options={props.data} />),
    [ElementType.TEXT_INPUT]: (props: DisplayElement)=>(<CustomInput id={`${props.column},${props.line}`} label={props.data[0]}/>)
  }

const getElementsOrder =(elements: DisplayElement[]):{key: DisplayElement[]}=>{ 
    return groupBy<DisplayElement>(elements.sort((la, lb) =>la["line"] - lb["line"]),"line")
  }


const DynamicForm = ({elements}: FormProps) => {
    return (
        <div className="form">
            {
                Object.entries(getElementsOrder(elements))
                .map(([key,currElementLine]) => (<div key={key} className="line">
                        {
                            currElementLine.sort((ca, cb) =>ca["column"] - cb["column"])
                            .map(currElement => <div className="column" key={`${currElement.column},${currElement.line}`}>{elementRecord[currElement.type](currElement)}</div>) 
                        }
                </div>))
            }
        </div>
    )
}
  
export default DynamicForm;