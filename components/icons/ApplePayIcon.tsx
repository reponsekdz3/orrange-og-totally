import React from 'react';

export const ApplePayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="100" height="40" rx="8" fill="black"/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold"> Pay</text>
    </svg>
);
