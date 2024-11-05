import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  destination: undefined,
  date: [],
  option: {
    adult: undefined,
    child: undefined,
    room: undefined,
  },
};

// Create the context with a default value that includes state and dispatch
export const SearchContext = createContext(INITIAL_STATE);

// Reducer function
const SearchAction = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH_STATE':
      return action.payload;
    case 'UPDATE_SEARCH_STATE':
      return INITIAL_STATE;
    default:
      return state;
  }
};

// Context provider component
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchAction, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        date: state.date,
        option: state.option,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

