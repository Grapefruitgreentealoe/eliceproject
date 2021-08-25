import React, { useReducer, createContext, useContext } from 'react';

const initialData = {
  apikey: '4848423aeee0be0d33a5f674f4383583',
  qestrnSeq: '6',
  trgetSe: '100209',
  name: '',
  gender: '',
  grade: '',
  startDtm: Date.now(),
  answers: '',
};

function answerReducer(state, action) {
  switch (action.type) {
    case 'USERINFO':
      const userinfo = action.payload;
      return {
        ...state,
        name: userinfo[0],
        gender: userinfo[1] == 1 ? '100323' : '100324',
      };
    case 'TESTDATA_SEND':
      const answerList = action.payload;
      const answers = answerList
        .map((answer, index) => {
          return `B${index + 1}=${answer}`;
        })
        .join(' ');
      return { ...state, answers };
    default:
      return new Error(`Unhandled action type: ${action.type}`);
  }
}

const AnswerStateContext = createContext();
const AnswerDispatchContext = createContext();

export function AnswerProvider({ children }) {
  const [state, dispatch] = useReducer(answerReducer, initialData);
  return (
    <AnswerStateContext.Provider value={state}>
      <AnswerDispatchContext.Provider value={dispatch}>
        {children}
      </AnswerDispatchContext.Provider>
    </AnswerStateContext.Provider>
  );
}

export function useAnswerState() {
  const context = useContext(AnswerStateContext);
  if (!context) {
    throw new Error('Cannot find AnswerProvider');
  }
  return context;
}

export function useAnswerDispatch() {
  const context = useContext(AnswerDispatchContext);
  if (!context) {
    throw new Error('Cannot find AnswerProvider');
  }
  return context;
}
