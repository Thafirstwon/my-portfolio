import { createContext, useEffect, useReducer} from "react";

// Initial State
const INITIAL_STATE= {
  theme: "dark"
}

// Reducer
const reducer = (state, action) => {
  switch (action.type){
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark"
      };

      case "SET_THEME":
        return {
          ...state,
          theme: action.payload
        };

        default:
          return state;
  }
};

export const ThemeContext = createContext({
  state: INITIAL_STATE,
  dispatch: () => null
})

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    const stored = localStorage.getItem("theme")

    if (stored === "dark" || stored === "light") {
      dispatch({ type: "SET_THEME", payload: stored})
    }
  },[])

  useEffect(() => {
    localStorage.setItem("theme", state.theme)
  },[state.theme])

  return (
    <ThemeContext.Provider value={{ state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}
