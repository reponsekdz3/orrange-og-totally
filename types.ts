
export type FilterCategory = 'All' | 'Express' | 'Luxury' | 'Budget';

export interface Bus {
  id: number;
  company: 'Volcano' | 'Onatracom' | 'Stella' | 'Generic';
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  rating: number;
  seatsAvailable: number;
  category: 'Express' | 'Luxury' | 'Budget';
}

export type SeatStatus = 'available' | 'booked' | 'selected';

export interface Seat {
  id: string;
  status: SeatStatus;
}
