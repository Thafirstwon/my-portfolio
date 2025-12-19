import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const useTheme = () => {
      const context = useContext(ThemeContext)

      if (!context || typeof context.dispatch !== 'function') {
            throw Error('undefined')
      }

      return context;
}