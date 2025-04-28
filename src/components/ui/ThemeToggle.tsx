
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/use-theme";

/**
 * ThemeToggle Component
 * 
 * A toggle button that switches between light and dark themes
 * Uses the theme context to manage application-wide theme state
 */
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure this component only renders client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, render nothing to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 p-2 flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-400" aria-hidden="true" />
      ) : (
        <Moon size={18} className="text-studynest-purple" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
};

export default ThemeToggle;
