import React, { useReducer, createContext, useContext } from 'react';

const initialData = {
  wonscore_arr:[],
  jobs:[],
  majors:[],
  res:[1,2]
};

function resultReducer(state, action) {
  switch (action.type) {
    case 'SCORE':
      const wonscore_arr = action.payload;
      return {
        ...state,
        wonscore_arr
      };
    case 'JOBS':
      const jobs = action.payload;
      return { ...state, jobs };
    case 'MAJORS':
      const majors = action.payload;
      return { ...state, majors };
    case 'RES':
      const res = action.payload;
      return { ...state, res };
    default:
      return new Error(`Unhandled action type: ${action.type}`);
  }
}

const ResultStateContext = createContext();
const ResultDispatchContext = createContext();

export function ResultProvider({ children }) {
  const [state, dispatch] = useReducer(resultReducer, initialData);
  return (
    <ResultStateContext.Provider value={state}>
      <ResultDispatchContext.Provider value={dispatch}>
        {children}
      </ResultDispatchContext.Provider>
    </ResultStateContext.Provider>
  );
}

export function useResultState() {
  const context = useContext(ResultStateContext);
  if (!context) {
    throw new Error('Cannot find ResultProvider');
  }
  return context;
}

export function useResultDispatch() {
  const context = useContext(ResultDispatchContext);
  if (!context) {
    throw new Error('Cannot find ResultProvider');
  }
  return context;
}
