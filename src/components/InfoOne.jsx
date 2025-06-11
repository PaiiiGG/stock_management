import React from "react";

function InfoOne() {
  return (
    <div className="container mx-auto flex item-center py-16">
      <div className="w-1/2">
        <img src="/public/pic/SC1.JPG" alt="" className="w-full h-auto rounded-lg px-6" />
      </div>
      <div className="w-1/2 px-6">
        <h2 className="text-3xl font-semibold">Welcome to Kmitl SC website</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          vero harum earum dolores ratione, obcaecati reiciendis voluptas
          distinctio culpa, deserunt beatae tempora pariatur labore laboriosam
          molestiae non ipsa dolorum nemo!
        </p>
      </div>
    </div>
  );
}

export default InfoOne;
