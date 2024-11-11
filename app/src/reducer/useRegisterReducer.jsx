import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};

// Create the context with a default value that includes state and dispatch
export const RegisterContext = createContext(INITIAL_STATE);

// Reducer function
const RegisterAction = (state, action) => {
  switch (action.type) {
    case 'REGISTER_START':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'REGISTER_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'REGISTER_ERROR':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Context provider component
export const RegisterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisterAction, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  return (
    <RegisterContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
