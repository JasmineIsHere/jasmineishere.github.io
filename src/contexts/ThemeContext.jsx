import { useEffect, createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const defaultTheme =
    localStorage.getItem("theme") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
