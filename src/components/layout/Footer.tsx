
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
              <span className="font-heading font-semibold text-xl text-studynest-purple">StudyNest</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Your personal study companion for focused, effective learning.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-studynest-purple text-sm">Dashboard</Link></li>
              <li><Link to="/flashcards" className="text-muted-foreground hover:text-studynest-purple text-sm">Flashcards</Link></li>
              <li><Link to="/videos" className="text-muted-foreground hover:text-studynest-purple text-sm">Study Videos</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-studynest-purple text-sm">Pomodoro Timer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-studynest-purple text-sm">About Us</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-studynest-purple text-sm">Privacy Policy</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-studynest-purple text-sm">Terms of Service</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-studynest-purple text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-studynest-purple">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-studynest-purple">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-studynest-purple">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} StudyNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
