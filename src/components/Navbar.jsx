import React, { useEffect, useRef, useState } from "react";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null)

  useEffect(() => {
    const closeSideBar = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", closeSideBar)
    return () => { document.removeEventListener("mousedown", closeSideBar) }
  }, [])


  return (
    <>
      <nav className="w-full min-h-[500px] max-h-96 bg-cover bg-[url('/public/pic/img_1.jpg')]">
        {/* <img src="/public/pic/img_1.jpg" alt="" className="w-full h-full object-cover absolute mix-blend-overlay" /> */}
        <div className="container flex">
  
          {/* onclick menu */}
          <div className="container flex items-center p-6 relative">
            <button id="main-toggle" className="h-10 w-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src="/public/pic/b-menu.png" alt=""/>
            </button>
            <img src="/public/pic/logoSC.png" alt="" className="h-30" />
          </div>
        </div>
      </nav>

      {isMenuOpen === true &&
        <div className="top-0 backdrop-blur-[4px] h-screen w-xs bg-black/50 fixed z-100" ref={sidebarRef}>
          <ul className="container h-full flex flex-col items-start gap-5 p-7">
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
      }

    </>
  );
}

export default Navbar;
