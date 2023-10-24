import { createContext, useReducer } from "react";
import quoteReducer from "./QuoteReducer";

const QuoteContext = createContext()

export const QuoteProvider = ({children})=>{
   
    const initialState = {
        quoteData: null,
        };
    
   const [state, dispatch] = useReducer(quoteReducer, initialState)

    return(
        <QuoteContext.Provider value={{...state , dispatch}}>{children}</QuoteContext.Provider>
    )
}

export default QuoteContext;