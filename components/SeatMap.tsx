
import React from 'react';
import { Seat, SeatStatus } from '../types';

interface SeatMapProps {
  seats: Seat[];
  onSeatSelect: (seatId: string) => void;
}

const SeatComponent: React.FC<{ seat: Seat; onSelect: () => void }> = ({ seat, onSelect }) => {
  const getSeatColor = (status: SeatStatus) => {
    switch (status) {
      case 'available':
        return 'bg-gray-200 hover:bg-orange-200';
      case 'booked':
        return 'bg-gray-400 cursor-not-allowed';
      case 'selected':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <button
      onClick={onSelect}
      disabled={seat.status === 'booked'}
      className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${getSeatColor(seat.status)}`}
    >
      {seat.id}
    </button>
  );
};

export const SeatMap: React.FC<SeatMapProps> = ({ seats, onSeatSelect }) => {
  const seatRows: Seat[][] = [];
  for (let i = 0; i < seats.length; i += 4) {
    seatRows.push(seats.slice(i, i + 4));
  }

  return (
    <div className="bg-gray-50 p-6 rounded-2xl flex-grow">
      <div className="flex justify-end mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center" title="Driver">
            {/* Steering wheel icon */}
            <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="2.25" fill="currentColor"/>
                <line x1="12" y1="2.75" x2="12" y2="6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12" y1="17.75" x2="12" y2="21.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="17.0658" y1="15.9342" x2="15.298" y2="14.1664" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8.70204" y1="9.83363" x2="6.93421" y2="8.0658" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="15.9342" y1="8.70204" x2="14.1664" y2="10.4699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8.0658" y1="17.0658" x2="9.83363" y2="15.298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </div>
      </div>
      <div className="space-y-3">
        {seatRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center items-center space-x-3">
            {row[0] && <SeatComponent seat={row[0]} onSelect={() => onSeatSelect(row[0].id)} />}
            {row[1] && <SeatComponent seat={row[1]} onSelect={() => onSeatSelect(row[1].id)} />}
            <div className="w-10"></div> {/* Aisle */}
            {row[2] && <SeatComponent seat={row[2]} onSelect={() => onSeatSelect(row[2].id)} />}
            {row[3] && <SeatComponent seat={row[3]} onSelect={() => onSeatSelect(row[3].id)} />}
          </div>
        ))}
      </div>
       <div className="mt-6 flex justify-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center"><div className="w-4 h-4 rounded bg-gray-200 mr-2"></div>Available</div>
          <div className="flex items-center"><div className="w-4 h-4 rounded bg-orange-500 mr-2"></div>Selected</div>
          <div className="flex items-center"><div className="w-4 h-4 rounded bg-gray-400 mr-2"></div>Booked</div>
      </div>
    </div>
  );
};
