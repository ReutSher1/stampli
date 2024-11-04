export enum ElementType{
    SELECT ='SELECT',
    TEXT_INPUT ='TEXT_INPUT'
  }

export interface DisplayElement{
    line: number
    column: number
    label: string
    type: ElementType
    data: string[]
  }