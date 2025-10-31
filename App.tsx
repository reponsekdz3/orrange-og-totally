import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { SearchBar } from './components/SearchBar';
import { FilterButtons } from './components/FilterButtons';
import { AdvancedFilters } from './components/AdvancedFilters';
import { BusList } from './components/BusList';
import { BusRoute, FilterCategory } from './types';
import { VolcanoLogo } from './components/icons/VolcanoLogo';
import { OnatracomLogo } from './components/icons/OnatracomLogo';
import { StellaLogo } from './components/icons/StellaLogo';
import { GenericBusLogo } from './components/icons/GenericBusLogo';

const initialBusRoutes: BusRoute[] = [
  {
    id: 1,
    companyName: 'Volcano Express',
    companyLogo: <VolcanoLogo />,
    routeDisplay: 'Kigali > Rubavu',
    departureTime: '07:00 AM',
    price: 7000,
    category: 'Express',
    timeOfDay: 'Morning',
    amenities: ['AC', 'WiFi'],
    duration: '4h',
    arrivalTime: '11:00 AM',
  },
  {
    id: 2,
    companyName: 'Onatracom',
    companyLogo: <OnatracomLogo />,
    routeDisplay: 'Kigali > Rubavu',
    departureTime: '06:30 AM',
    arrivalTime: '11:00 AM',
    duration: '4h',
    price: 8500,
    category: 'Budget',
    timeOfDay: 'Morning',
    amenities: [],
  },
  {
    id: 3,
    companyName: 'Stella Express',
    companyLogo: <StellaLogo />,
    routeDisplay: 'Kigali > Mubavu',
    departureTime: '08:00 AM',
    price: 9000,
    category: 'Luxury',
    timeOfDay: 'Morning',
    amenities: ['AC', 'WiFi', 'Reclining Seats'],
  },
    {
    id: 4,
    companyName: 'Volcano Express',
    companyLogo: <VolcanoLogo />,
    routeDisplay: 'Kigali > Rubavu',
    departureTime: '01:30 PM',
    price: 8000,
    category: 'Express',
    timeOfDay: 'Afternoon',
    amenities: ['AC'],
  },
  {
    id: 5,
    companyName: 'Stella Express',
    companyLogo: <StellaLogo />,
    routeDisplay: 'Kigali > Musanze',
    departureTime: '06:00 PM',
    price: 9500,
    category: 'Luxury',
    timeOfDay: 'Evening',
    amenities: ['AC', 'WiFi', 'Reclining Seats'],
  },
  {
    id: 6,
    companyName: 'Onatracom',
    companyLogo: <OnatracomLogo />,
    routeDisplay: 'Kigali > Huye',
    departureTime: '02:00 PM',
    price: 6500,
    category: 'Budget',
    timeOfDay: 'Afternoon',
    amenities: [],
  },
];

const timeOfDayMap: { [key: number]: BusRoute['timeOfDay'] } = {
  0: 'Morning',
  1: 'Afternoon',
  2: 'Evening',
};

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Express');
  const [searchTerm, setSearchTerm] = useState('');
  const [departureTime, setDepartureTime] = useState(0); // 0: Morning, 1: Afternoon, 2: Evening

  const filteredRoutes = useMemo(() => {
    const selectedTimeOfDay = timeOfDayMap[departureTime];

    return initialBusRoutes.filter(route => {
      const matchesFilter = activeFilter === 'All' || route.category === activeFilter;
      
      const matchesSearch = searchTerm.trim() === '' || 
        route.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.routeDisplay.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTime = route.timeOfDay === selectedTimeOfDay;
      
      return matchesFilter && matchesSearch && matchesTime;
    });
  }, [activeFilter, searchTerm, departureTime]);

  const handleClearCategoryFilter = () => {
    setActiveFilter('All');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0E6] to-[#FFE6D5] font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <main>
          <SubHeader />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <AdvancedFilters 
            activeFilter={activeFilter} 
            departureTime={departureTime}
            setDepartureTime={setDepartureTime}
            onFilterClear={handleClearCategoryFilter}
          />
          <BusList routes={filteredRoutes} />
        </main>
      </div>
    </div>
  );
};

export default App;
