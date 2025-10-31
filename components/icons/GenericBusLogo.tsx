
import React from 'react';

export const GenericBusLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="180" height="80" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 50C10 44.4772 14.4772 40 20 40H160C171.046 40 180 48.9543 180 60V80H20C14.4772 80 10 75.5228 10 70V50Z" fill="#4B5563"/>
        <path d="M180 80H190C195.523 80 200 75.5228 200 70V60C200 48.9543 191.046 40 180 40H160C171.046 40 180 48.9543 180 60V80Z" fill="#1F2937"/>
        <rect x="20" y="50" width="150" height="15" fill="#E5E7EB"/>
        <rect x="25" y="52" width="20" height="11" fill="#4B5563"/>
        <rect x="55" y="52" width="20" height="11" fill="#4B5563"/>
        <rect x="85" y="52" width="20" height="11" fill="#4B5563"/>
        <rect x="115" y="52" width="20" height="11" fill="#4B5563"/>
        <rect x="145" y="52" width="20" height="11" fill="#4B5563"/>
        <path d="M10 50L25 35H155L170 50H10Z" fill="#FB923C"/>
        <path d="M170 50L185 35H195L180 50H170Z" fill="#F97316"/>
        <circle cx="40" cy="80" r="10" fill="#111827"/>
        <circle cx="40" cy="80" r="5" fill="#D1D5DB"/>
        <circle cx="150" cy="80" r="10" fill="#111827"/>
        <circle cx="150" cy="80" r="5" fill="#D1D5DB"/>
        <path d="M15 75H5" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round"/>
        <path d="M190 75H195" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
