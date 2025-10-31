
import React from 'react';
// Fix: Add '.ts' extension to the import path for 'types'.
import { FilterCategory } from '../types.ts';
import { StarIcon } from './icons/StarIcon';
import { CloseIcon } from './icons/CloseIcon';
import { TimeIcon } from './icons/TimeIcon';

interface AdvancedFiltersProps {
  activeFilter: FilterCategory;
  departureTime: number;
  setDepartureTime: (value: number) => void;
  onFilterClear: () => void;
}

const timeLabels = ['Morning', 'Afternoon', 'Evening'];

export const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ activeFilter, departureTime, setDepartureTime, onFilterClear }) => {
  const showBusTypeTag = activeFilter === 'Luxury' || activeFilter === 'Budget';
  
  const departureTimeLabel = timeLabels[departureTime];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 my-8 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full lg:w-auto">
        <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-600">Bus Type</span>
            <div className="flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              <StarIcon className="w-4 h-4 mr-1" />
              <span>{showBusTypeTag ? activeFilter : 'Any'}</span>
              {showBusTypeTag && (
                <button onClick={onFilterClear} className="ml-2 text-orange-600 hover:text-orange-800">
                    <CloseIcon className="w-4 h-4" />
                </button>
              )}
            </div>
        </div>

        <div className="flex items-center space-x-3">
          <TimeIcon className="w-6 h-6 text-orange-500" />
          <div className="text-sm">
            <span className="font-bold text-gray-700">DEPARTURE TIME</span>
            <span className="text-gray-500"> ({departureTimeLabel}, Anytime)</span>
          </div>
        </div>
        <div className="w-full sm:w-48">
            <input 
                type="range" 
                min="0" 
                max="2" 
                step="1" 
                value={departureTime} 
                onChange={(e) => setDepartureTime(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
                {timeLabels.map(label => <span key={label}>{label}</span>)}
            </div>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full lg:w-auto justify-between">
        <ul className="text-xs text-gray-500 list-disc list-inside">
            <li>AC, WIF: Reclining</li>
            <li>Pl. Reclining Seats</li>
        </ul>
        <button className="px-8 py-3 text-sm font-bold text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200 flex-shrink-0">
          SELECT SEATS
        </button>
      </div>
       <style>{`
        .slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          margin-top: -8px; /* To center vertically */
        }
        .slider-thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #F97316;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        .slider-thumb::-moz-range-thumb {
            width: 14px; /* 20px - 2*3px border */
            height: 14px;
            background: #F97316;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};