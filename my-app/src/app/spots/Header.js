import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b">
      <div className="text-red-500 text-2xl font-bold">airbnb</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-full p-2 shadow-sm">
          <input type="text" placeholder="Anywhere" className="outline-none px-2" />
          <input type="text" placeholder="Any week" className="outline-none px-2" />
          <input type="text" placeholder="Add guests" className="outline-none px-2" />
          <Search className="text-white bg-red-500 p-1 rounded-full" size={24} />
        </div>
        <button>Airbnb your home</button>
        <button>🌐</button>
        <button className="border rounded-full p-2">👤</button>
      </div>
    </header>
  );
};

export default Header;