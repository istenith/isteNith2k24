"use client";
import React from 'react';
import { useState } from 'react';
import { motion} from 'framer-motion';
import Image from 'next/image';
import { ApolloClient, InMemoryCache, useQuery, gql, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/', 
  cache: new InMemoryCache(),
});

const GET_EVENTS = gql`
  query GetEvents {
    gallery {
      image
      event
      set
      desc
      title
    }
  }
`;

interface GalleryItem {
  image: string;
  event: string;
  set: string;
  title: string;
  desc: string;
}

interface GetEventsData {
  gallery: GalleryItem[];
}


const Gallery: React.FC = () => {
  
  const { loading, error, data } = useQuery<GetEventsData>(GET_EVENTS, {
    client,
    fetchPolicy: 'cache-first',
  });





  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const set1 = data?.gallery.filter(item => item.set === "set1") || [];
  const set2 = data?.gallery.filter(item => item.set === "set2") || [];
  const set3 = data?.gallery.filter(item => item.set === "set3") || [];
  

  return (
    <div className="background-color: #1E1E1E; text-white min-h-screen">
  
    <div className="font-barlow sm:text-9xl flex justify-center items-center md:flex-none md:justify-start md:items-start height-155 text-5xl mx-24 mt-11 mb-6 sm:mb-11">
      GALLERY
    </div>
  
     <div className='flex flex-col gap-1'>
    {/* grid section 1 */}
    <div className="grid grid-cols-2 sm:grid-cols-8 sm:grid-rows-7 mt-8 h-[650px] sm:mx-24 mx-6 gap-3">
      {set1.map((item, i) => (
            <motion.div
            key={`${i}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          
          className={`border-2 rounded-xl flex flex-col relative group items-center justify-center
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
            quality={100}
            unoptimized= {true}
             width={250}
             height={250}
            src={item.image}
            alt=""
            className="w-full h-full rounded-xl object-cover group-hover:scale-[1.02] group-hover:brightness-[40%]"
          />
           <div className="absolute bottom-0 left-0 p-1 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 ">
            
    <div className='font-barlowb md:text-xl text-[14px] '>{item.title}</div>
    <div className='font-actor md:text-lg text-[12px]'>{item.desc}</div>
  </div>
        </motion.div>
      ))}
</div>

    {/* grid section 2 */}
    <div className="grid grid-cols-2 sm:grid-cols-8 sm:grid-rows-7 sm:mt-3 h-[650px] sm:mx-24 mx-6 gap-3">
      {set2.map((item, i) => (
            <motion.div
            key={`${i}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          
          className={`border-2 rounded-xl flex flex-col relative group items-center justify-center
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
            quality={100}
            unoptimized= {true}
             width={250}
             height={250}
            src={item.image}
            alt=""
            className="w-full h-full rounded-xl object-cover group-hover:scale-[1.02] group-hover:brightness-[40%]"
          />
           <div className="absolute bottom-0 left-0 p-1 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 ">
            
    <div className='font-barlowb md:text-xl text-[14px] '>{item.title}</div>
    <div className='font-actor md:text-lg text-[12px]'>{item.desc}</div>
  </div>
        </motion.div>
      ))}
</div>

 {/* grid section 3 */}
 <div className="grid grid-cols-2 sm:grid-cols-8 sm:grid-rows-7 mt-3 h-[650px] sm:mx-24 mx-6 gap-3">
      {set3.map((item, i) => (
            <motion.div
            key={`${i}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          
          className={`border-2 rounded-xl flex flex-col relative group items-center justify-center
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
            quality={100}
            unoptimized= {true}
             width={250}
             height={250}
            src={item.image}
            alt=""
            className="w-full h-full rounded-xl object-cover group-hover:scale-[1.02] group-hover:brightness-[40%]"
          />
           <div className="absolute bottom-0 left-0 p-1 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 ">
            
    <div className='font-barlowb md:text-xl text-[14px] '>{item.title}</div>
    <div className='font-actor md:text-lg text-[12px]'>{item.desc}</div>
  </div>
        </motion.div>
      ))}
</div>

      <div className='h-28 lg:h-0'></div>
    </div>
    </div>
  );
};


const GalleryWithApollo: React.FC = () => (
  <ApolloProvider client={client}>
    <Gallery />
  </ApolloProvider>
);

export default GalleryWithApollo;