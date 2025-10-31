
import React from 'react';
import { Bus } from '../types';
import { BusCard } from './BusCard';

interface BusListProps {
  buses: Bus[];
  onSelectBus: (bus: Bus) => void;
}

export const BusList: React.FC<BusListProps> = ({ buses, onSelectBus }) => {
  if (buses.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-700">No buses found</h2>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-8 px-6">
      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} onSelect={onSelectBus} />
      ))}
    </div>
  );
};
