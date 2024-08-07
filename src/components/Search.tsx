import React from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search() {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonColors-yellows rounded">
        <select className="text-black bg-gray-300 hover:bg-gray-200 h-10 rounded-l cursor-pointer">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex items-center h-[100%] text-black pl-2 grow"
          type="text"
          placeholder="Search Amazon"
        />
        <button className="w-[44px] cursor-pointer hover:bg-yellow-600 h-10 rounded-r">
          <MagnifyingGlassIcon className="h-[30px] m-auto text-black items-center" />
        </button>
      </div>
    </div>
  );
}
