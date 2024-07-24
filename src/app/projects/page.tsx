"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";


export default function projects(){

    const CustomPrevArrow: React.FC<any> = (props) => (
        <div onClick={props.onClick} className="slick-prev">
          Previous
        </div>
      );

      const CustomNextArrow: React.FC<any> = (props) => (
        <div onClick={props.onClick} className="slick-next">
          Next
        </div>
      );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      

      const data = [
        {
          name: `Akshit 1`,
          review: `Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          name: `Akshit 1`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          name: `Akshit 1`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .`
        },
        {
          name: `Akshit 1`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          name: `Akshit 1`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        
      ];




    return(


<>


<div className="lg:text-[167px] md:text-8xl md:mx-20 text-5xl mt-12 mx-7 md:mt-16 font-light  text-white lg:mx-20 lg:px-2 lg:mt-20">
    PROJECTS
</div>
<div className="border-t-2 border-gray-200 md:mx-20 lg:mx-24 mx-4 lg:mt-0 "></div>
<div className='lg:w-9/12 md:w-8/12 sm:w-9/12 sm:m-auto lg:m-auto mx-6 '>
              <div className="lg:mt-16 md:mt-20 mt-12  ">
              <Slider {...settings}>
                {data.map((d) => (
                  <div key={d.name} className="bg-custom-white md:h-[600px] h-[450px] lg:w-[500px] lg:h-[369px] text-black rounded-xl">
                    
                    
        
                    <div className="flex flex-col items-center justify-center gap-4 p-2">
                      <p className="lg:text-3xl font-actor md:text-3xl text-3xl md:mt-7 lg:mt-4 text-text-black mt-5 ">{d.name.toUpperCase()}</p>
                      <p className="     lg:text-1.3xl font-actor md:mt-10 px-3 sm:py-7 pt-5 lg:py-0 md:py-0 lg:mt-0  md:px-8 text-text-black lg:px-7">{d.review}</p>
                      <button className='bg-custom-black text-white fixed bottom-4 text-lg md:fixed md:bottom-6 font-actor px-6 py-1 rounded-xl lg:fixed lg:bottom-6'>Read More</button>
                    </div>
                  </div>
                ))}
              </Slider>
              </div>
              
            </div>
     
</>
       

          
    );
         
        }
        
  
        


