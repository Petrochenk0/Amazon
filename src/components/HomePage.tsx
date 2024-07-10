import React from 'react';

import { Carousel } from './';

export default function HomePage() {
  return (
    <div className="bg-amazonColors-background">
      <div className="max-w-[1500px] min-w-[1000px] bg-red-400 m-auto">
        HomePage
        <Carousel />
      </div>
    </div>
  );
}
