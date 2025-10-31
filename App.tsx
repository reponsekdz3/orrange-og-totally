
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { SearchBar } from './components/SearchBar';
import { FilterButtons } from './components/FilterButtons';
import { AdvancedFilters } from './components/AdvancedFilters';
import { BusList } from './components/BusList';
import { SeatSelection } from './components/SeatSelection';
import { PaymentPage } from './components/PaymentPage';
import { BookingConfirmationPage } from './components/BookingConfirmationPage';
import { Bus, FilterCategory } from './types';

const allBuses: Bus[] = [
  { id: 1, company: 'Volcano', departureTime: '07:00', arrivalTime: '09:30', duration: '2h 30m', category: 'Express', rating: 4.5, price: 15.00, seatsAvailable: 25 },
  { id: 2, company: 'Onatracom', departureTime: '08:15', arrivalTime: '11:00', duration: '2h 45m', category: 'Budget', rating: 3.8, price: 12.50, seatsAvailable: 40 },
  { id: 3, company: 'Stella', departureTime: '09:30', arrivalTime: '12:00', duration: '2h 30m', category: 'Luxury', rating: 4.8, price: 20.00, seatsAvailable: 15 },
  { id: 4, company: 'Volcano', departureTime: '10:00', arrivalTime: '12:30', duration: '2h 30m', category: 'Express', rating: 4.6, price: 15.00, seatsAvailable: 18 },
  { id: 5, company: 'Ritco', departureTime: '11:45', arrivalTime: '14:30', duration: '2h 45m', category: 'Budget', rating: 3.5, price: 12.00, seatsAvailable: 35 },
  { id: 6, company: 'Volcano', departureTime: '13:00', arrivalTime: '15:30', duration: '2h 30m', category: 'Luxury', rating: 4.9, price: 22.00, seatsAvailable: 10 },
  { id: 7, company: 'Onatracom', departureTime: '14:30', arrivalTime: '17:15', duration: '2h 45m', category: 'Budget', rating: 3.9, price: 12.50, seatsAvailable: 22 },
  { id: 8, company: 'Stella', departureTime: '16:00', arrivalTime: '18:30', duration: '2h 30m', category: 'Express', rating: 4.7, price: 16.00, seatsAvailable: 30 },
  { id: 9, company: 'Volcano', departureTime: '18:00', arrivalTime: '20:30', duration: '2h 30m', category: 'Express', rating: 4.5, price: 15.00, seatsAvailable: 5 },
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [departureTime, setDepartureTime] = useState(1); // 0: Morning, 1: Afternoon, 2: Evening
  const [filteredBuses, setFilteredBuses] = useState<Bus[]>(allBuses);

  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  const [view, setView] = useState<'list' | 'seats' | 'payment' | 'confirmation'>('list');

  useEffect(() => {
    let buses = allBuses;
    if (activeFilter !== 'All') {
      buses = buses.filter(bus => bus.category === activeFilter);
    }

    if (searchTerm) {
      // Simple search on company name for this example
      buses = buses.filter(bus => bus.company.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Filter by departure time
    buses = buses.filter(bus => {
      const hour = parseInt(bus.departureTime.split(':')[0], 10);
      if (departureTime === 0) return hour < 12; // Morning
      if (departureTime === 1) return hour >= 12 && hour < 17; // Afternoon
      if (departureTime === 2) return hour >= 17; // Evening
      return true;
    });

    setFilteredBuses(buses);
  }, [searchTerm, activeFilter, departureTime]);

  const handleSelectBus = (bus: Bus) => {
    setSelectedBus(bus);
    setView('seats');
  };

  const handleSeatConfirm = (seats: string[]) => {
    if (seats.length > 0) {
      setSelectedSeats(seats);
      setView('payment');
    }
  };

  const handlePaymentSuccess = () => {
    setView('confirmation');
  };
  
  const handleBackToSeats = () => {
    setView('seats');
  };
  
  const handleCloseAndReset = () => {
    setView('list');
    setSelectedBus(null);
    setSelectedSeats([]);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div 
        className="absolute top-0 left-0 w-full h-[500px] bg-cover bg-center -z-10" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1570125909232-eb263c186f72?q=80&w=2070&auto=format&fit=crop')"}}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Header />
        <main className="mt-8">
          <SubHeader />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl -mt-8 pt-12 pb-8">
            <AdvancedFilters
                activeFilter={activeFilter}
                departureTime={departureTime}
                setDepartureTime={setDepartureTime}
                onFilterClear={() => setActiveFilter('All')}
              />

            <BusList buses={filteredBuses} onSelectBus={handleSelectBus} />
          </div>
        </main>
      </div>

      {view === 'seats' && selectedBus && (
        <SeatSelection
          bus={selectedBus}
          onClose={handleCloseAndReset}
          onConfirm={handleSeatConfirm}
        />
      )}

      {view === 'payment' && selectedBus && (
        <PaymentPage
          bus={selectedBus}
          selectedSeats={selectedSeats}
          onBack={handleBackToSeats}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {view === 'confirmation' && selectedBus && (
         <BookingConfirmationPage
          bus={selectedBus}
          selectedSeats={selectedSeats}
          onDone={handleCloseAndReset}
        />
      )}
    </div>
  );
};

export default App;
