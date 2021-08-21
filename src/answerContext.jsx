import React , {useReducer, createContext, useContext, } from "react";

const initialAnswers = {

}

function answerReducer(state,action){
    switch (action.type){
        case 'ALLPRESSED':
            return state.map((todo)=>
            todo.id === action.id) ? {}: todo};
        
    }


const AnswerStateContext = createContext();
const AnswerDispatchContext = createContext();

export function AnswerProvider({children}){
    const[state,dispatch] = useReducer(answerReducer,initialAnswers);
    return (
        <AnswerStateContext.Provider value={state}>
        <AnswerDispatchContext.Provider value={dispatch}>
            {children}
        </AnswerDispatchContext.Provider>
        </AnswerStateContext.Provider>
    )
}

export function useAnswerState(){
    const context = useContext(AnswerStateContext);
    if(!context){
        throw new Error('Cannot find AnswerProvider');
    }
    return context;
}

export function useAnswerDispatch(){
    const context = useContext(AnswerDispatchContext);
    if(!context){
        throw new Error('Cannot find AnswerProvider');
    }
    return context;
}

