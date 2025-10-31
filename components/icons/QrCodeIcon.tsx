
import React from 'react';

export const QrCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="100" height="100" fill="#FFF"/>
        <rect x="10" y="10" width="30" height="30" fill="#000"/>
        <rect x="60" y="10" width="30" height="30" fill="#000"/>
        <rect x="10" y="60" width="30" height="30" fill="#000"/>
        
        <rect x="45" y="10" width="10" height="10" fill="#000"/>
        <rect x="10" y="45" width="10" height="10" fill="#000"/>

        <rect x="45" y="45" width="10" height="10" fill="#000"/>
        <rect x="60" y="45" width="10" height="10" fill="#000"/>
        <rect x="75" y="45" width="10" height="10" fill="#000"/>
        <rect x="45" y="60" width="10" height="10" fill="#000"/>
        <rect x="45" y="75" width="10" height="10" fill="#000"/>
        
        <rect x="75" y="60" width="15" height="15" fill="#000"/>
    </svg>
);
