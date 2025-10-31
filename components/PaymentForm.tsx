import React, { useState } from 'react';
import { VisaIcon } from './icons/VisaIcon';
import { MastercardIcon } from './icons/MastercardIcon';
import { AmexIcon } from './icons/AmexIcon';
import { MtnIcon } from './icons/MtnIcon';
import { AirtelIcon } from './icons/AirtelIcon';

type PaymentMethod = 'card' | 'mobile';

interface PaymentFormProps {
    onPaymentSuccess: () => void;
    amount: number;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentSuccess, amount }) => {
    const [activeTab, setActiveTab] = useState<PaymentMethod>('card');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically integrate with a payment gateway
        console.log('Processing payment...');
        // Simulate successful payment
        onPaymentSuccess();
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    onClick={() => setActiveTab('card')}
                    className={`px-6 py-3 font-semibold text-sm ${activeTab === 'card' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                >
                    Credit/Debit Card
                </button>
                <button
                    onClick={() => setActiveTab('mobile')}
                    className={`px-6 py-3 font-semibold text-sm ${activeTab === 'mobile' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                >
                    Mobile Money
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                {activeTab === 'card' && (
                    <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center space-x-4 mb-4">
                           <VisaIcon className="h-8"/>
                           <MastercardIcon className="h-8" />
                           <AmexIcon className="h-8" />
                        </div>
                        <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                <input type="text" id="expiryDate" placeholder="MM/YY" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                            </div>
                            <div>
                                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                <input type="text" id="cvc" placeholder="123" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
                            <input type="text" id="cardName" placeholder="John Doe" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                        </div>
                    </div>
                )}

                {activeTab === 'mobile' && (
                     <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center space-x-4 mb-4">
                           <MtnIcon className="h-10"/>
                           <AirtelIcon className="h-10" />
                        </div>
                        <div>
                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" id="mobileNumber" placeholder="07... " className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                        </div>
                         <p className="text-xs text-gray-500">You will receive a prompt on your phone to enter your PIN.</p>
                    </div>
                )}
                
                <button
                    type="submit"
                    className="w-full mt-8 px-8 py-4 text-lg font-bold text-white bg-orange-500 rounded-xl shadow-md hover:bg-orange-600 transition-colors duration-200 disabled:bg-gray-300"
                >
                    PAY ${amount.toFixed(2)}
                </button>
            </form>
        </div>
    );
};
