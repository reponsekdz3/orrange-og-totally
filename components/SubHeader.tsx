import React from 'react';

const NavLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a
    href="#"
    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors duration-200"
  >
    {children}
  </a>
);

export const SubHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mt-12 mb-8">
      <h1 className="text-3xl font-bold text-gray-800">FIND YOUR BUS</h1>
      <nav className="hidden lg:flex items-center space-x-2">
        <a href="#" className="px-4 py-2 text-sm font-medium text-orange-600 border-b-2 border-orange-600">FIND BUS</a>
        <NavLink>MY TICKETS</NavLink>
        <NavLink>HELP</NavLink>
        <NavLink>CONTACT</NavLink>
      </nav>
    </div>
  );
};
