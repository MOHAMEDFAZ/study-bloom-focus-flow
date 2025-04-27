
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Book, Clock, Youtube, BarChart2, Info } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4 md:px-6 py-3 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-heading font-semibold text-xl text-studynest-purple">StudyNest</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-foreground/80 hover:text-studynest-purple transition-colors">
            Dashboard
          </Link>
          <Link to="/flashcards" className="text-foreground/80 hover:text-studynest-purple transition-colors">
            Flashcards
          </Link>
          <Link to="/videos" className="text-foreground/80 hover:text-studynest-purple transition-colors">
            Study Videos
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-studynest-purple transition-colors">
            About Us
          </Link>
          <ThemeToggle />
          <Button variant="outline" size="sm" className="ml-2">
            Sign In
          </Button>
          <Button className="bg-studynest-purple hover:bg-studynest-purple-secondary">
            Sign Up
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container px-4 py-4 mx-auto flex flex-col gap-4">
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart2 size={18} className="text-studynest-purple" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/flashcards" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book size={18} className="text-studynest-purple" />
              <span>Flashcards</span>
            </Link>
            <Link 
              to="/videos" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Youtube size={18} className="text-studynest-purple" />
              <span>Study Videos</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info size={18} className="text-studynest-purple" />
              <span>About Us</span>
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Button>
              <Button className="bg-studynest-purple hover:bg-studynest-purple-secondary" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
