import React, { useState } from 'react';
import DynamicForm from './ui/form';
import CustomTextArea from './common/text-area/custom-text-area';
import './App.css';
import { DisplayElement, ElementType } from './types/element';


function App() {

  const [element, setElements] = useState<DisplayElement[]>([]);


  const getDecodedElements =(inputElements: string): DisplayElement[]=>{
    const elements: string[] = inputElements.split('\n')
    return elements.map(element => {
      const elementInfo = element.split(";")
      return {line: parseInt(elementInfo[0]) ,column:parseInt(elementInfo[1]),
              label:elementInfo[2], type: elementInfo[3] as unknown as ElementType , 
              data: elementInfo[4].split(',')}
    })
  }

  const getInput=(input: string)=>{

    if(input){
      setElements(getDecodedElements(input))
    }
    
  }
  return (
    <div className="App">
    <CustomTextArea id="input" onBlur={(e)=> getInput(e.target.value)} rows={5}/>
    <DynamicForm elements={element}/>
    </div>
  );
}

export default App;