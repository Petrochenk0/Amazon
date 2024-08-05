import React from 'react';

export default function NavBar() {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonColors text-white">
        {/* left */}
        <div className="flex items-center">
          <div className="h-[55px] border  border-amazonColors hover:border-white m-2 cursor-pointer">
            <img className="h-[30px] w-[100px] object-contain m-3 " src={'../images/amazon.png'} />
          </div>

          <div className="cursor-pointer pl-4 pr-4 h-[55px] border  border-amazonColors hover:border-white">
            <div className="text-xs xl:text-sm  text-gray-300 mt-2">Deliver to</div>
            <div className="text-sm xl:text-base font-bold -mt-2">United Kingdom</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex"></div>
        {/* right */}
        <div className="flex"></div>
      </div>
    </header>
  );
}
