
import React from 'react';
// Fix: Add '.ts' extension to the import path for 'types'.
import { FilterCategory } from '../types.ts';

interface FilterButtonsProps {
  activeFilter: FilterCategory;
  setActiveFilter: (filter: FilterCategory) => void;
}

const filters: FilterCategory[] = ['All', 'Express', 'Luxury', 'Budget'];

export const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-8 -mb-2 z-10 relative">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 sm:px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 ${
            activeFilter === filter
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-700 hover:bg-orange-50'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};