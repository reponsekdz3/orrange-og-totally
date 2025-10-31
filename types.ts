
export type FilterCategory = 'All' | 'Express' | 'Luxury' | 'Budget';

export interface Bus {
  id: number;
  company: 'Volcano' | 'Onatracom' | 'Stella' | string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  category: FilterCategory;
  rating: number;
  price: number;
  seatsAvailable: number;
}

export type SeatStatus = 'available' | 'booked' | 'selected';

export interface Seat {
  id: string;
  status: SeatStatus;
}
