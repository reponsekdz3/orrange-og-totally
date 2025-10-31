
import React, { useState } from 'react';
import { Bus, Seat } from '../types';
import { SeatMap } from './SeatMap';
import { BookingSummary } from './BookingSummary';
import { BookingCloseIcon } from './icons/BookingCloseIcon';

interface SeatSelectionProps {
  bus: Bus;
  onClose: () => void;
}

// Helper to generate mock seats
const generateSeats = (totalSeats: number, bookedCount: number): Seat[] => {
  const seats: Seat[] = [];
  const bookedIndices = new Set<number>();
  while (bookedIndices.size < bookedCount) {
    bookedIndices.add(Math.floor(Math.random() * totalSeats));
  }

  for (let i = 0; i < totalSeats; i++) {
    const row = Math.floor(i / 4) + 1;
    const colMap = ['A', 'B', 'C', 'D'];
    const col = colMap[i % 4];
    seats.push({
      id: `${col}${row}`,
      status: bookedIndices.has(i) ? 'booked' : 'available',
    });
  }
  return seats;
};


export const SeatSelection: React.FC<SeatSelectionProps> = ({ bus, onClose }) => {
  const [seats, setSeats] = useState<Seat[]>(() => generateSeats(40, 15));
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatSelect = (seatId: string) => {
    setSeats(prevSeats => 
      prevSeats.map(seat => {
        if (seat.id === seatId) {
          if (seat.status === 'selected') {
            return { ...seat, status: 'available' };
          }
          if (seat.status === 'available') {
            return { ...seat, status: 'selected' };
          }
        }
        return seat;
      })
    );
    setSelectedSeats(prevSelected => 
      prevSelected.includes(seatId) 
        ? prevSelected.filter(id => id !== seatId)
        : [...prevSelected, seatId]
    );
  };

  const handleConfirm = () => {
    alert(`Booking confirmed for bus ${bus.company} for seats: ${selectedSeats.join(', ')}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-3xl p-4 sm:p-8 w-full max-w-6xl relative animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
          <BookingCloseIcon className="w-8 h-8" />
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Select Your Seats</h2>
        <div className="flex flex-col lg:flex-row gap-8">
            <SeatMap seats={seats} onSeatSelect={handleSeatSelect} />
            <BookingSummary selectedBus={bus} selectedSeats={selectedSeats} onConfirm={handleConfirm} />
        </div>
      </div>
    </div>
  );
};
