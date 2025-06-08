import React from "react";

function InfoTwo() {
  return (
    <div className="container mx-auto flex item-center py-16">
      <div className="w-1/2 px-6">
        <h2 className="text-3xl font-semibold">Welcome to Kmitl SC website</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          velit nesciunt officiis deleniti asperiores earum error magni sit
          natus quod.
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="/public/pic/SC2.JPG"
          alt=""
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default InfoTwo;
