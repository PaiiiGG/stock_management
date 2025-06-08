import React from "react";

function Navbar() {
  return (
    <nav className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="container mx-auto flex items-center">
          <img src="/public/pic/logoSC.png" alt="" className="h-17" />
          <a href="#" className="text-white text-2xl font-semibold">
            KMITL SC
          </a>
        </div>
        <div className="container mx-auto flex items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
