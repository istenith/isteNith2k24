"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ApolloClient, InMemoryCache, useQuery, gql, ApolloProvider } from '@apollo/client';
import Navbar from "../../../components/navbar"
import Footer from '../../../components/footer';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/', 
  cache: new InMemoryCache(),
});

const GET_EVENTS = gql`
  query GetEvents {
    gallery {
      image
      event
    }
  }
`;

interface GalleryItem {
  image: string;
  event: string;
}

interface GetEventsData {
  gallery: GalleryItem[];
}

const Gallery: React.FC = () => {
  const { loading, error, data } = useQuery<GetEventsData>(GET_EVENTS, {
    client,
    fetchPolicy: 'cache-first',
  });

  const params = useParams<{ id: string }>();
  const id = params.id || 'pahal'; 

  const [property, setProperty] = useState(id);

  useEffect(() => {
    if (id) {
      setProperty(id);
    }
  }, [id]);

  const filteredEvents = data?.gallery.filter(item => item.event === property) || [];
  const gridcss = "sm:h-16 h-9 w-[28%] text-sm sm:text-3xl rounded-full transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer font-actor justify-center items-center flex";

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
   
 <>
 <Navbar/>
    <div className="bg-[#171616] text-white min-h-screen">
      <div className="font-barlowb sm:text-9xl flex justify-center items-center md:flex-none md:justify-start md:items-start height-155 text-5xl mx-24 mt-11 mb-6 sm:mb-11">
        GALLERY
      </div>
   
      <div className="flex gap-3 sm:mx-24 mx-6">
        <div onClick={() => setProperty('pahal')} className={`${gridcss} ${property === 'pahal' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>Pahal</div>
        <div onClick={() => setProperty('hult')} className={`${gridcss} ${property === 'hult' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>Hult Prize</div>
        <div onClick={() => setProperty('prody')} className={`${gridcss} ${property === 'prody' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>Prodyogiki</div>
        <div onClick={() => setProperty('prarambh')} className={`${gridcss} ${property === 'prarambh' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>Prarambh</div>
      </div>
     
      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-8 sm:grid-rows-7 mt-8 h-[650px] sm:mx-24 mx-6 gap-3">
        {filteredEvents.map((item, i) => (
          <motion.div
            key={`${property}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: i * 0.2 }}
            className={`bg-white border-2 rounded-xl flex flex-col items-center justify-center
            ${i === 2 || i === 3 ? 'sm:col-span-2 col-span-1' : ''}
            ${i === 0 ? 'sm:col-span-2 col-span-2' : ''}
            ${i === 6 ? 'sm:col-span-3 col-span-2' : ''}
            ${i === 1 || i === 4 ? 'sm:col-span-4 col-span-1' : ''}
            ${i === 5 ? 'sm:col-span-3 col-span-1' : ''}
            ${i === 0 || i === 1 ? 'sm:row-span-3' : ''}
            ${i === 2 ? 'sm:row-span-5' : ''}
            ${i === 3 ? 'sm:row-span-4 row-span-2' : ''}
            ${i === 4 || i === 5 || i === 6 ? 'sm:row-span-2' : ''}
            `}
          >
            <Image
              width={250}
              height={400}
              src={item.image}
              alt={item.event}
              className="w-full h-full rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className='h-60 lg:h-0'></div>
    </div>
    <Footer/>
    </>
  );
};

const GalleryWithApollo: React.FC = () => (
  <ApolloProvider client={client}>
    <Gallery />
  </ApolloProvider>
);

export default GalleryWithApollo;
