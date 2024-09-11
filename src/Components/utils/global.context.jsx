import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  };
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        dispatch({type: "GET_DATA", payload: res.data});
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
