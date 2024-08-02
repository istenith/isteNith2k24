"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import WordReveal from '@/components/animations/WordReveal';

const DomainPage = () => {
  const [domain, setDomain] = useState<{ title: React.ReactNode; description: string; image: string; rotation: string; } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDescription, setAnimateDescription] = useState(false); // State for animation

  // Use useMemo to memoize the domains array
  const domains = useMemo(() => [
    {
      title: <><CgArrowLongLeft className="inline" /> Design <CgArrowLongRight className="inline" /></>,
      description: "The design team is the creative force to elevate society's visual, artistic, and aesthetic aspects. The Design team works to develop imaginatively captivating posters, graphics, and event branding.",
      image: 'https://i.pinimg.com/564x/df/ab/86/dfab862519becd6970a10c1369efdcf3.jpg',
      rotation: 'rotate-12'
    },
    {
      title: <><CgArrowLongLeft className="inline" /> Finance <CgArrowLongRight className="inline" /></>,
      description: "The management of ISTE's financial activities falls within the purview of the Finance domain. It oversees activities such as accounting, financial reporting, and budgeting.",
      image: 'https://i.pinimg.com/564x/68/7c/69/687c6904b364e3c8bf539b7d15a581d4.jpg',
      rotation: 'rotate-1'
    },
    {
      title: <><CgArrowLongLeft className="inline" /> PR <CgArrowLongRight className="inline" /></>,
      description: 'The Public Relations domain of ISTE is committed to providing the best possible communication with its members, institutions, and the public.',
      image: 'https://i.pinimg.com/564x/7a/cc/85/7acc8503086b3a2d7448b8be7058292d.jpg',
      rotation: '-rotate-6'
    },
    {
      title: <><CgArrowLongLeft className="inline" /> TECH <CgArrowLongRight className="inline" /></>,
      description: "Welcome to ISTE's Tech Domain! Serving as the organization's technological backbone, the Tech domain is responsible for delivering essential technical resources and support.",
      image: 'https://i.pinimg.com/564x/96/6f/21/966f212c46f1d4831b82ed2698ce7953.jpg',
      rotation: '-rotate-12'
    }
  ], []); // Empty dependency array ensures domains is only created once

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true
  });

  const handleSwipe = (direction: string) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % domains.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + domains.length) % domains.length);
    }
  };

  const handleDomainClick = (index: number) => {
    setCurrentIndex(index);
    setAnimateDescription(false);
    setTimeout(() => setAnimateDescription(true), 0);
  };

  useEffect(() => {
    setDomain(domains[currentIndex]);
    setAnimateDescription(false);
    setTimeout(() => setAnimateDescription(true), 0);
  }, [currentIndex, domains]);

  const currentDomain = domains[currentIndex];

  return (
    <div className="min-h-screen bg-1e1e1e mt-domainpage text-white flex flex-col items-center justify-center p-4 relative">
      <h1 className="text-4xl mb-8 font-barlowmedium py-16 lg:text-[88px] text-center">DOMAINS</h1>
      <div className="w-full">
        <div {...handlers} className="flex h-full space-x-7 overflow-x-auto sm:flex-wrap sm:justify-center lg:flex-nowrap hide-scrollbar swipeable-view">
          {domains.map((domain, index) => (
            <div
              key={index}
              onClick={() => handleDomainClick(index)}
              className={`cursor-pointer p-4 bg-cover bg-center transition-transform transform hover:scale-105 ${index === currentIndex ? '' : 'hidden'} mx-auto h-cards w-cards min-w-[80%] sm:min-w-[45%] lg:min-w-[20%] ${domain.rotation} card-${index}`}
              style={{ backgroundImage: `url(${domain.image})` }}
            ></div>
          ))}
        </div>
        <div className="web-view flex h-full space-x-7 sm:flex-wrap sm:justify-center lg:flex-nowrap hide-scrollbar">
          {domains.map((domain, index) => (
            <div
              key={index}
              onClick={() => handleDomainClick(index)}
              className={`cursor-pointer p-4 bg-cover bg-center transition-transform transform hover:scale-105 h-cards w-cards min-w-[80%] sm:min-w-[45%] lg:min-w-[20%] ${domain.rotation} card-${index}`}
              style={{ backgroundImage: `url(${domain.image})` }}
            ></div>
          ))}
        </div>
      </div>
      {currentDomain && (
        <div className="mt-8 p-4 rounded-lg text-center">
          <h2 className="text-3xl lg:text-[36px] mb-4 font-actor">{currentDomain.title}</h2>
          <div className="text-2xl text-center font-actor">
            <WordReveal text={currentDomain.description} animate={animateDescription} />
          </div>
        </div>
      )}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 block lg:hidden">
        <FaChevronLeft className="w-10 h-10 text-white cursor-pointer" onClick={() => handleSwipe('right')} />
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 block lg:hidden">
        <FaChevronRight className="w-10 h-10 text-white cursor-pointer" onClick={() => handleSwipe('left')} />
      </div>
    </div>
  );
};

export default DomainPage;
