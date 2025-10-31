
import React from 'react';

export const VolcanoLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className="flex items-center space-x-2">
        <svg width="60" height="40" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M40 80L0 80L20 40L40 80Z" fill="#F97316"/>
            <path d="M50 80L20 80L35 50L50 80Z" fill="#FB923C"/>
            <path d="M30 45C35 40 38 35 30 30C22 25 20 35 30 45Z" fill="#FED7AA"/>
            <path d="M25 35C30 30 33 25 25 20C17 15 15 25 25 35Z" fill="#FED7AA"/>
        </svg>
        <div className="text-left">
            <span className="text-xl font-bold text-gray-800">VOLCANO</span>
            <span className="block text-sm font-semibold text-orange-500 -mt-1">EXPRESS</span>
        </div>
    </div>
);
