
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { SearchBar } from './components/SearchBar';
import { FilterButtons } from './components/FilterButtons';
import { AdvancedFilters } from './components/AdvancedFilters';
import { BusList } from './components/BusList';
import { SeatSelection } from './components/SeatSelection';
import { FilterCategory, Bus } from './types';

const mockBuses: Bus[] = [
  { id: 1, company: 'Volcano', departureTime: '07:00', arrivalTime: '09:30', duration: '2h 30m', price: 15, rating: 4.5, seatsAvailable: 23, category: 'Express' },
  { id: 2, company: 'Onatracom', departureTime: '08:15', arrivalTime: '11:00', duration: '2h 45m', price: 12, rating: 4.2, seatsAvailable: 10, category: 'Budget' },
  { id: 3, company: 'Stella', departureTime: '09:00', arrivalTime: '11:15', duration: '2h 15m', price: 18, rating: 4.8, seatsAvailable: 5, category: 'Luxury' },
  { id: 4, company: 'Volcano', departureTime: '10:30', arrivalTime: '13:00', duration: '2h 30m', price: 15, rating: 4.4, seatsAvailable: 30, category: 'Express' },
  { id: 5, company: 'Generic', departureTime: '13:00', arrivalTime: '16:00', duration: '3h 00m', price: 10, rating: 3.9, seatsAvailable: 40, category: 'Budget' },
  { id: 6, company: 'Stella', departureTime: '14:00', arrivalTime: '16:15', duration: '2h 15m', price: 20, rating: 4.9, seatsAvailable: 12, category: 'Luxury' },
  { id: 7, company: 'Onatracom', departureTime: '16:45', arrivalTime: '19:45', duration: '3h 00m', price: 11, rating: 4.1, seatsAvailable: 8, category: 'Budget' },
  { id: 8, company: 'Volcano', departureTime: '18:00', arrivalTime: '20:30', duration: '2h 30m', price: 16, rating: 4.6, seatsAvailable: 15, category: 'Express' },
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [departureTime, setDepartureTime] = useState(1); // 0: Morning, 1: Afternoon, 2: Evening
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  const filteredBuses = useMemo(() => {
    return mockBuses.filter(bus => {
      // Filter by category
      if (activeFilter !== 'All' && bus.category !== activeFilter) {
        return false;
      }
      
      // Filter by departure time
      const hour = parseInt(bus.departureTime.split(':')[0], 10);
      if (departureTime === 0 && hour >= 12) return false; // Morning
      if (departureTime === 1 && (hour < 12 || hour >= 18)) return false; // Afternoon
      if (departureTime === 2 && hour < 18) return false; // Evening

      // Filter by search term (mocking city name)
      // For this demo, we assume the search term applies to all buses if not empty
      // In a real app, this would filter based on departure/arrival locations
      if (searchTerm && !'Kigali'.toLowerCase().includes(searchTerm.toLowerCase())) {
          // This is a dummy check. A real app would have departure locations on the bus object.
          // return false; 
      }

      return true;
    });
  }, [activeFilter, departureTime, searchTerm]);

  const handleClearFilters = () => {
    setActiveFilter('All');
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div 
        className="absolute top-0 left-0 w-full h-[500px] bg-cover bg-center" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop')"}}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-gray-50/0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-8">
        <Header />
        <main>
          <SubHeader />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg -mt-8 pt-12 pb-6">
             <AdvancedFilters 
                activeFilter={activeFilter}
                departureTime={departureTime}
                setDepartureTime={setDepartureTime}
                onFilterClear={handleClearFilters}
             />
             <BusList buses={filteredBuses} onSelectBus={setSelectedBus} />
          </div>
        </main>
      </div>

      {selectedBus && (
        <SeatSelection bus={selectedBus} onClose={() => setSelectedBus(null)} />
      )}
       <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
