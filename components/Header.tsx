import React from 'react';
import { BusIcon } from './icons/BusIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/70 backdrop-blur-sm rounded-full shadow-lg p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 ml-4">
          <BusIcon className="h-8 w-8 text-orange-500" />
          <span className="text-xl font-bold text-gray-800 tracking-wide">BUS RWANDA</span>
        </div>
        <div className="flex items-center space-x-3 mr-4">
          <button className="px-6 py-2 text-sm font-semibold text-orange-500 bg-white border border-orange-200 rounded-full shadow-sm hover:bg-orange-50 transition-colors duration-200">
            LOG IN
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200">
            REGISTER
          </button>
        </div>
      </div>
    </header>
  );
};
