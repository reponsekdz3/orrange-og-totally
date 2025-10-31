
import React from 'react';
// Fix: Add '.ts' extension to the import path for 'types'.
import { Bus } from '../types.ts';
import { BookingSummary } from './BookingSummary';
import { PaymentForm } from './PaymentForm';
import { BookingCloseIcon } from './icons/BookingCloseIcon';

interface PaymentPageProps {
  bus: Bus;
  selectedSeats: string[];
  onBack: () => void;
  onPaymentSuccess: () => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ bus, selectedSeats, onBack, onPaymentSuccess }) => {
  const totalAmount = selectedSeats.length * 10; // Assuming a fixed price for simplicity

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-3xl p-4 sm:p-8 w-full max-w-6xl relative animate-fade-in-up">
        <button onClick={onBack} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
          <BookingCloseIcon className="w-8 h-8" />
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Complete Your Payment</h2>
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
                <PaymentForm onPaymentSuccess={onPaymentSuccess} amount={totalAmount} />
            </div>
            <div className="w-full lg:w-1/3">
                 <BookingSummary selectedBus={bus} selectedSeats={selectedSeats} onConfirm={() => {}} isPaymentPage={true} />
            </div>
        </div>
      </div>
    </div>
  );
};