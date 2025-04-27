
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
    <div className="relative w-full max-w-2xl mx-auto mb-6">
      <Input 
        placeholder="Search for educational videos..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full h-12 pl-4 pr-14 bg-black/40 border-white/10 rounded-xl focus:ring-studynest-purple/50 placeholder:text-muted-foreground"
      />
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
        disabled={isLoading}
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SearchBar;
