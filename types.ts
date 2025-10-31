import React from 'react';

export type FilterCategory = 'All' | 'Express' | 'Luxury' | 'Budget';

export interface BusRoute {
  id: number;
  companyName: string;
  companyLogo: React.ReactNode;
  routeDisplay: string;
  departureTime: string;
  arrivalTime?: string;
  duration?: string;
  price: number;
  category: 'Express' | 'Luxury' | 'Budget';
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening';
  amenities: string[];
}
