import React from "react";

function Hero() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold">welcome to SC Kmitl</h1>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint?
        </p>
        <a
          href="#"
          className="bg-orange-500 text-white px-6 py-2 rounded-full mt-8 inline-block hover:bg-orange-600"
        >
          Get start
        </a>
      </div>
    </div>
  );
}

export default Hero;