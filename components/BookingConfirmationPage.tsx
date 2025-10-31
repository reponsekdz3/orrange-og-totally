
import React from 'react';
import { Bus } from '../types';
import { TicketSummary } from './TicketSummary';
import { UpcomingTickets } from './UpcomingTickets';
import { PaymentCheckIcon } from './icons/PaymentCheckIcon';

interface BookingConfirmationPageProps {
  bus: Bus;
  selectedSeats: string[];
  onDone: () => void;
}

export const BookingConfirmationPage: React.FC<BookingConfirmationPageProps> = ({ bus, selectedSeats, onDone }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-2xl text-center animate-fade-in-up">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <PaymentCheckIcon className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Booking Confirmed!</h2>
        <p className="text-gray-500 mt-2 mb-6">Your ticket has been sent to your email address.</p>

        <TicketSummary bus={bus} selectedSeats={selectedSeats} />

        <UpcomingTickets />
        
        <button 
          onClick={onDone}
          className="w-full mt-6 px-8 py-3 text-lg font-bold text-white bg-orange-500 rounded-xl shadow-md hover:bg-orange-600 transition-colors duration-200"
        >
          DONE
        </button>
      </div>
    </div>
  );
};
