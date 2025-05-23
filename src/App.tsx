
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Flashcards from "./pages/Flashcards";
import VideoPlayer from "./pages/VideoPlayer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetching on window focus
      retry: 1, // Only retry failed queries once
    },
  },
});

/**
 * Main App component
 * Sets up core providers and routing for the application
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          {/* Toast notifications */}
          <Toaster />
          <Sonner />
          
          {/* Routing setup */}
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/flashcards" element={<Flashcards />} />
                <Route path="/videos" element={<VideoPlayer />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
