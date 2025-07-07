import React from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

function FeaturedComponent() {
  return (
    <section className="pt-8 w-full">
      {/* Header */}
      <div className="flex justify-center mb-10 text-center">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl xl:text-4xl">
          Latest Featured Posts
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-10 px-4 sm:px-8 md:px-16 lg:px-32">
        {Array(4).fill(0).map((_, index) => (
          <FeaturedCard key={index} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedComponent;
