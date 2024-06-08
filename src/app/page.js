"use client"
import React from 'react';
import Home from '../components/Home';
import useLocomotiveScroll from '../hooks/loco';

const Page = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} data-scroll-container>
      <Home />
    </div>
  );
};

export default Page;
