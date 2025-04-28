
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isLoading: boolean;
}

/**
 * SearchBar component for video search functionality
 * 
 * @param {string} searchQuery - Current search query text
 * @param {function} onSearchChange - Handler function when search input changes
 * @param {boolean} isLoading - Loading state to indicate search in progress
 * @returns SearchBar component with input and search button
 */
const SearchBar = ({ searchQuery, onSearchChange, isLoading }: SearchBarProps) => {
  // Local state to manage input before submitting search
  const [inputValue, setInputValue] = useState(searchQuery);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto mb-6">
      <div className="flex">
        <Input 
          placeholder="Search for educational videos..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-12 pl-4 pr-14 bg-black/40 border-white/10 rounded-l-xl focus:ring-studynest-purple/50 placeholder:text-muted-foreground"
          disabled={isLoading}
          aria-label="Search videos"
        />
        <Button 
          type="submit"
          variant="default" 
          className="bg-studynest-purple hover:bg-studynest-purple-secondary h-12 rounded-r-xl"
          disabled={isLoading}
          aria-label={isLoading ? "Searching..." : "Search videos"}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" 
                 aria-hidden="true"></div>
          ) : (
            <Search className="h-5 w-5" aria-hidden="true" />
          )}
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
