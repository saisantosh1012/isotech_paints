"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const mainContent = document.getElementById("main-content");
      if(mainContent) {
        mainContent.style.opacity = '1';
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-24 h-28 relative mb-4">
        <div className="w-20 h-24 bg-primary rounded-b-lg absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden">
           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-accent to-primary animate-pulse" style={{ height: '70%' }}></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-1.5 h-8 bg-white mx-auto"></div>
            <div className="w-10 h-5 bg-gray-300 rounded-lg -mt-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
            </div>
        </div>
      </div>
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold">
          <span className="text-accent">Isotech</span> Painting & Deco
        </h1>
        <p className="text-sm text-gray-300 mt-1">Transforming spaces with color</p>
      </div>
    </div>
  );
}
