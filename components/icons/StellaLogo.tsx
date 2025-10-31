
import React from 'react';

export const StellaLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className="flex items-center space-x-3">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#F97316"/>
        </svg>
        <span className="text-xl font-bold text-gray-700">STELLA EXPRESS</span>
    </div>
);
