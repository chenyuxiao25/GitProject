export const  increment  = (number) => { 
    return {
        type :"INCREMENT",
        paload :number ,
    }
 }
 export const  decrement  = (number) => { 
  
    return {
        type :"DECREMENT",
        paload :number ,
    }
 }