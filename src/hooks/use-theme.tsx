
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define theme types
type Theme = 'dark' | 'light';

// Props for the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Shape of the theme context
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Create the context with undefined as initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 * 
 * Provides theme context to the application and handles theme persistence
 * 
 * @param {ReactNode} children - Child components that will have access to theme context
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Default to dark theme
  const [theme, setTheme] = useState<Theme>('dark');

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Update document classes and localStorage whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    
    // Persist theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 * 
 * Custom hook to access the theme context
 * 
 * @returns {ThemeContextType} The theme context containing current theme and setter function
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
