import React from 'react';
import { BusRoute } from '../types';

interface BusCardProps {
  route: BusRoute;
}

export const BusCard: React.FC<BusCardProps> = ({ route }) => {
  const { companyName, companyLogo, routeDisplay, departureTime, duration, price, arrivalTime } = route;

  const renderOnatracomCard = () => (
    <div className="text-left">
        <p className="text-sm font-semibold text-gray-500">
            ROUTE: <span className="text-gray-800 font-bold">{routeDisplay}</span>
        </p>
        <p className="text-sm font-semibold text-gray-500 mt-1">
            TIME: <span className="text-gray-800 font-bold">{companyName === 'Onatracom' ? '07:00 AM - 11:00 AM' : `${departureTime} - ${arrivalTime}`} ({duration})</span>
        </p>
        <p className="text-sm font-semibold text-gray-500 mt-1">
            Departs: <span className="text-gray-800 font-bold">{departureTime}</span>
        </p>
    </div>
  );

  const renderDefaultCard = () => (
    <div className="text-center">
        <p className="text-lg font-bold text-gray-800">{routeDisplay}</p>
        <p className="text-gray-500 mt-2">Departs: {departureTime}</p>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <div className="p-6 bg-white">
        <div className="h-16 flex items-center justify-center mb-4">
            {companyLogo}
        </div>
      </div>
      <div className="p-6 pt-0 flex-grow flex flex-col justify-between">
        <div>
            {companyName === 'Onatracom' ? renderOnatracomCard() : renderDefaultCard()}
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="text-gray-600 font-semibold">
            Price: <span className="font-bold text-gray-800">RWF {price.toLocaleString()}</span>
          </p>
          <button className="px-5 py-2 text-sm font-bold text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};
