
import React from 'react';

export const OnatracomLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className="flex items-center space-x-3">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" stroke="#F97316" strokeWidth="2"/>
            <path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 17C14.7614 17 17 14.7614 17 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-xl font-bold text-gray-700">ONATRACOM</span>
    </div>
);
