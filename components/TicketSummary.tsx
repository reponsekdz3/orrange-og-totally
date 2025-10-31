
import React from 'react';
import { Bus } from '../types';
import { QrCodeIcon } from './icons/QrCodeIcon';
import { VolcanoLogo } from './icons/VolcanoLogo';
import { OnatracomLogo } from './icons/OnatracomLogo';
import { StellaLogo } from './icons/StellaLogo';
import { GenericBusLogo } from './icons/GenericBusLogo';

interface TicketSummaryProps {
  bus: Bus;
  selectedSeats: string[];
}

const CompanyLogo: React.FC<{ company: Bus['company'] }> = ({ company }) => {
    switch (company) {
        case 'Volcano': return <VolcanoLogo />;
        case 'Onatracom': return <OnatracomLogo />;
        case 'Stella': return <StellaLogo />;
        default: return <GenericBusLogo />;
    }
};


export const TicketSummary: React.FC<TicketSummaryProps> = ({ bus, selectedSeats }) => {
  const totalAmount = selectedSeats.length * 10; // Assuming a fixed price for simplicity

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left">
      <div className="flex justify-between items-start">
        <div>
            <CompanyLogo company={bus.company} />
            <div className="mt-4 space-y-2 text-sm">
                <p><span className="font-semibold text-gray-600">Route:</span> Kigali - Musanze</p>
                <p><span className="font-semibold text-gray-600">Departure:</span> {bus.departureTime}, Today</p>
                <p><span className="font-semibold text-gray-600">Seats:</span> <span className="text-orange-600 font-bold">{selectedSeats.join(', ')}</span></p>
                <p><span className="font-semibold text-gray-600">Total Paid:</span> <span className="font-bold text-gray-800">${totalAmount.toFixed(2)}</span></p>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <QrCodeIcon className="w-24 h-24" />
            <span className="text-xs text-gray-500 mt-1">Scan at boarding</span>
        </div>
      </div>
    </div>
  );
};
