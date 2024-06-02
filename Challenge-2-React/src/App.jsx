// import React from 'react'

// function App() {
//   return (
//     <div className=' relative w-full h-screen bg-zinc-800'>
      
//     </div>
//   )
// }

// export default App

import React, { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    // Cleanup function to mimic componentWillUnmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className=' relative w-full h-screen bg-zinc-800' data-scroll-container>

    </div>
  );
};

export default App;
