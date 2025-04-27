
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ searchQuery, onSearchChange, isLoading }: SearchBarProps) => {
  return (
    <div className="relative">
      <Input 
        placeholder="Search for educational videos..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pr-14 bg-card border-border/50"
      />
      <Button 
        variant="ghost" 
        size="sm"
        className="absolute right-1 top-1/2 transform -translate-y-1/2"
        disabled={isLoading}
      >
        <Search size={18} />
      </Button>
    </div>
  );
};

export default SearchBar;
