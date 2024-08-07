import React from 'react';

import { Search } from './';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonColors text-white">
        {/* left */}
        <div className="flex items-center mr-4">
          <div className="h-[55px] border  border-amazonColors hover:border-white m-2 cursor-pointer">
            <img className="h-[30px] w-[100px] object-contain m-3 " src={'../images/amazon.png'} />
          </div>

          <div className="cursor-pointer pl-4 pr-4 h-[55px] border  border-amazonColors hover:border-white">
            <div className="text-xs xl:text-sm  text-gray-300 mt-2">Deliver to</div>
            <div className="text-sm xl:text-base font-bold -mt-2">United Kingdom</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex relative grow items-center">
          <Search />
        </div>
        {/* right */}
        <div className="flex items-center">
          <div className="cursor-pointer pl-4 pr-4 h-[55px] border  border-amazonColors hover:border-white">
            <div className="text-xs xl:text-sm  text-gray-300 mt-2">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold -mt-2">Account & Lists</div>
          </div>

          <div className="cursor-pointer pl-4 pr-4 h-[55px] border  border-amazonColors hover:border-white">
            <div className="text-xs xl:text-sm  text-gray-300 mt-2">Returns</div>
            <div className="text-sm xl:text-base font-bold -mt-2">& Orders</div>
          </div>
          <div className="flex h-[55px] pr-3 pl-3 cursor-pointer border  border-amazonColors hover:border-white mr-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="font-bold mt-6">Cart</div>
          </div>
        </div>
      </div>
    </header>
  );
}
