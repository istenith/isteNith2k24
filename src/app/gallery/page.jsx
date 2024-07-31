"use client";
import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, useQuery, gql, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  cache: new InMemoryCache(),
  // credentials: 'include'
});

const GET_EVENTS = gql`
  {
    gallery {
      image
      event
    }
  }
`;

const Gallery = () => {
  const { loading, error, data } = useQuery(GET_EVENTS, {
    client,
    fetchPolicy: 'cache-first',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const [property, setProperty] = useState("pahal");
  const filteredEvents = data.gallery.filter(item => item.event === property);

  const gridcss = "sm:h-16 h-9 w-[28%] text-sm sm:text-3xl rounded-full transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer font-actor font-extralight justify-center items-center flex";

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <div className="text-f2 sm:text-9xl flex justify-center items-center md:flex-none md:justify-start md:items-start h-40 text-5xl font-extralight mx-24 mt-11 mb-6 sm:mb-11">
        GALLERY
      </div>
     
      <div className="flex gap-3 sm:mx-24 mx-6">
        <div
          onClick={() => setProperty('pahal')}
          className={`${gridcss} ${property === 'pahal' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}
        >
          Pahal
        </div>
        <div
          onClick={() => setProperty('hult')}
          className={`${gridcss} ${property === 'hult' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}
        >
          Hult Prize
        </div>
        <div
          onClick={() => setProperty('prody')}
          className={`${gridcss} ${property === 'prody' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}
        >
          Prodyogiki
        </div>
        <div
          onClick={() => setProperty('prarambh')}
          className={`${gridcss} ${property === 'prarambh' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}
        >
          Prarambh
        </div>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-2 sm:grid-cols-8 sm:grid-rows-7 mt-8 h-[650px] sm:mx-24 mx-6 gap-3">
        {filteredEvents.map((item, i) => (
          <div
            key={i}
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
            <img
              src={item.image}
              alt=""
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryWithApollo = () => (
  <ApolloProvider client={client}>
    <Gallery />
  </ApolloProvider>
);

export default GalleryWithApollo;
