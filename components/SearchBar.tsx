import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { CalendarGridIcon } from './icons/CalendarGridIcon';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-white rounded-full shadow-lg p-2 flex items-center">
        <div className="pl-4 pr-2 text-gray-400">
          <SearchIcon className="w-6 h-6" />
        </div>
        <input
          type="text"
          placeholder="Departure (es. Kigali)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-lg"
        />
        <div className="flex items-center space-x-2 p-2 bg-orange-500 rounded-full">
            <CalendarIcon className="w-6 h-6 text-white" />
            <CalendarGridIcon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};
