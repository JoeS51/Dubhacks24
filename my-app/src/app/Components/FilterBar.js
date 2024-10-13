import React, { useState } from 'react';

const filtersData = [
  { name: 'SUV' }, // Use the imported `suv` image directly
  { name: 'Sedan'}, // Import other images if needed, or use the public folder path
  { name: 'Minivan' }, // Use public folder images with a leading '/'
  { name: 'Gated'},
  { name: 'Curbside'},
  { name: 'Garage'},
  { name: 'Lot'},
];

const FilterBar = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filterName) => {
    const updatedFilters = activeFilters.includes(filterName)
      ? activeFilters.filter(name => name !== filterName)
      : [...activeFilters, filterName];

    setActiveFilters(updatedFilters);
    onFilterChange(updatedFilters); // Call the parent component's filter function
  };

  return (
    <div className="flex justify-evenly py-4 border-b-2">
      {filtersData.map((filter, index) => (
        <button
          key={index}
          onClick={() => toggleFilter(filter.name)}
          className={`w-15 h-15 flex flex-col items-center p-2 border-2 rounded-lg transition-colors ${
            activeFilters.includes(filter.name) ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
          }`}
        >
          <span className="text-xs">{filter.name}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
