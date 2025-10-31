
import React from 'react';
import { BusCard } from './BusCard';
import { BusRoute } from '../types';

interface BusListProps {
  routes: BusRoute[];
}

export const BusList: React.FC<BusListProps> = ({ routes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {routes.map((route) => (
        <BusCard key={route.id} route={route} />
      ))}
    </div>
  );
};
