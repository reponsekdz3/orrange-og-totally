

import React from 'react';
// Fix: Add '.ts' extension to the import path for 'types'.
import { Bus } from '../types.ts';
import { CheckIcon } from './icons/CheckIcon';

interface BookingSummaryProps {
  selectedBus: Bus;
  selectedSeats: string[];
  onConfirm: () => void;
  isPaymentPage?: boolean;
}

const SEAT_PRICE = 10; // Assuming a fixed price for simplicity

export const BookingSummary: React.FC<BookingSummaryProps> = ({ selectedBus, selectedSeats, onConfirm, isPaymentPage = false }) => {
  const totalAmount = selectedSeats.length * SEAT_PRICE;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full lg:w-96">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>
      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Bus Company:</span>
          <span className="font-semibold text-gray-800">{selectedBus.company}</span>
        </div>
        <div className="flex justify-between">
          <span>Departure:</span>
          <span className="font-semibold text-gray-800">{selectedBus.departureTime}</span>
        </div>
        <div className="flex justify-between">
          <span>Selected Seats:</span>
          <span className="font-semibold text-gray-800">{selectedSeats.join(', ')}</span>
        </div>
        <div className="border-t border-gray-200 my-3"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total Amount:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex items-center text-xs text-gray-500">
          <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
          <span>Cancellation available</span>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
          <span>E-ticket will be sent to your email</span>
        </div>
      </div>
      {!isPaymentPage && (
        <button 
          onClick={onConfirm}
          disabled={selectedSeats.length === 0}
          className="w-full mt-6 px-8 py-4 text-lg font-bold text-white bg-orange-500 rounded-xl shadow-md hover:bg-orange-600 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          CONFIRM BOOKING
        </button>
      )}
    </div>
  );
};