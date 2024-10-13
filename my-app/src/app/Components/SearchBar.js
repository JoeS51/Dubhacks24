// "use client";

// import React, { useState } from 'react';
// import { Search } from 'lucide-react';

// const SearchBar = () => {
//   const [location, setLocation] = useState('Seattle');
//   const [checkIn, setCheckIn] = useState('Oct 17');
//   const [checkOut, setCheckOut] = useState('Add dates');

//   const handleSearch = () => {
//     console.log('Searching with:', { location, checkIn, checkOut});
//     // Implement your search logic here
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8">
//       <div className="flex items-center bg-white rounded-full shadow-lg">
//         <div className="flex-1 px-6 py-3 border-r border-gray-300">
//           <div className="text-xs font-semibold text-gray-500">Where</div>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full text-sm focus:outline-none"
//             placeholder="Search destinations"
//           />
//         </div>
//         <div className="flex-1 px-6 py-3 border-r border-gray-300">
//           <div className="text-xs font-semibold text-gray-500">Check in</div>
//           <input
//             type="text"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="w-full text-sm focus:outline-none"
//             placeholder="Add dates"
//           />
//         </div>
//         <div className="flex-1 px-6 py-3">
//           <div className="text-xs font-semibold text-gray-500">Check out</div>
//           <input
//             type="text"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="w-full text-sm focus:outline-none"
//             placeholder="Add dates"
//           />
//         </div>
//         <button
//           onClick={handleSearch}
//           className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 focus:outline-none"
//         >
//           <Search size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;