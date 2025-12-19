import { createContext, useEffect, useReducer } from "react";

// 1. Initial state
const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

// 2. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: state.fontSize === 16 ? 20 : 16,
      };

    default:
      return state;
  }
};

// 3. Context
export const ThemeContext = createContext({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Initialize theme from localStorage ONLY if valid
  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark" || stored === "light") {
      dispatch({ type: "SET_THEME", payload: stored });
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
