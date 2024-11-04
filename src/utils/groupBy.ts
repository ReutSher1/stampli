 export const groupBy = <T,>(element: T[], key: keyof T)  => {
    return element.reduce((elementByOrder: any , currElement) => {
      (elementByOrder[currElement[key]] = elementByOrder[currElement[key]] || []).push(currElement);
      return elementByOrder;
    }, {});
  };