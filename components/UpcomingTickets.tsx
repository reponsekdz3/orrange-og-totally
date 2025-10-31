
import React from 'react';

export const UpcomingTickets: React.FC = () => {
    return (
        <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-orange-800">Check all your upcoming tickets.</p>
            <button className="px-4 py-2 text-xs font-bold text-orange-600 bg-white border border-orange-200 rounded-full shadow-sm hover:bg-orange-100">
                MY TICKETS
            </button>
        </div>
    );
};
