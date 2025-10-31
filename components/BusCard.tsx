
import React from 'react';
import { Bus } from '../types';
import { VolcanoLogo } from './icons/VolcanoLogo';
import { OnatracomLogo } from './icons/OnatracomLogo';
import { StellaLogo } from './icons/StellaLogo';
import { GenericBusLogo } from './icons/GenericBusLogo';
import { StarIcon } from './icons/StarIcon';

interface BusCardProps {
  bus: Bus;
  onSelect: (bus: Bus) => void;
}

const CompanyLogo: React.FC<{ company: Bus['company'] }> = ({ company }) => {
    switch (company) {
        case 'Volcano': return <VolcanoLogo />;
        case 'Onatracom': return <OnatracomLogo />;
        case 'Stella': return <StellaLogo />;
        default: return <GenericBusLogo />;
    }
};

export const BusCard: React.FC<BusCardProps> = ({ bus, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row items-center p-4 gap-4">
        <div className="w-full md:w-1/4 flex items-center justify-center p-4">
             <CompanyLogo company={bus.company} />
        </div>
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-8">
                <div>
                    <p className="text-xl font-bold text-gray-800">{bus.departureTime}</p>
                    <p className="text-sm text-gray-500">Kigali</p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-500">{bus.duration}</p>
                    <div className="w-24 h-px bg-gray-300 my-1"></div>
                    <p className="text-xs text-orange-500 font-semibold">{bus.category}</p>
                </div>
                <div>
                    <p className="text-xl font-bold text-gray-800">{bus.arrivalTime}</p>
                    <p className="text-sm text-gray-500">Musanze</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-gray-700">{bus.rating.toFixed(1)}</span>
            </div>

            <div className="text-center md:text-right">
                <p className="text-2xl font-bold text-orange-600">${bus.price.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{bus.seatsAvailable} seats available</p>
            </div>
             <button
                onClick={() => onSelect(bus)} 
                className="w-full md:w-auto px-6 py-3 text-sm font-bold text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200 flex-shrink-0"
             >
                SELECT
            </button>
        </div>
    </div>
  );
};
