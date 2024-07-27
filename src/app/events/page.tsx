"use client"
import Image from "next/image";
import Link from "next/link"


export default function Event() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <div className="flex justify-center bg-white">
        <div className="text-black text-[60px] md:text-[120px] p-3 font-desc">
          EVENTS
        </div>
      </div>

      {/* Hult Prize */}
      <div>
        <div className="mx-4 md:mx-8">
          <div className="text-2xl md:text-5xl md:mb-4 mb-2 my-12 font-head ">HULT PRIZE</div>
          <div className="flex flex-col md:flex-row">
            <div className="box min-w-full md:min-w-[38rem] mb-6 h-80 bg-white">
            <Image
              src="/assets/images/hult/DCS_0814.webp"
              alt=""
              className="w-full h-full object-cover"/>
            </div>
            <div className="text mx-0 md:mx-8 text-white font-desc text-lg md:text-[29px] md:leading-8">
              The Hult Prize is an international competition that challenges university students to create innovative solutions for global issues. Founded by Ahmad Ashkar and funded by Bertil Hult, it awards $1 million in seed capital to the winning team to launch a social enterprise. Partnered with Hult International Business School and the United Nations Foundation, it’s called the "Nobel Prize for students" by Nobel laureate Muhammad Yunus.
              <br />
              <br />
              At ISTE NITH, we proudly host and conduct the on-campus round of the Hult Prize.
            </div>
          </div>
        </div>
        <div className="boxset2 flex flex-col md:flex-row mx-4 md:mx-8">
<Link href={`/events/hult`}>          <div className="flex bg-white w-full md:w-[38rem] h-[120px] mr-0 md:mr-8 text-black text-xl items-center justify-center font-desc md:mt-0 mt-3 mb-4 md:mb-0 ">View Hult Prize's Gallery</div></Link>
          <div className="miniboxes flex gap-3 justify-center">
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3"></div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3"></div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3"></div>
          </div>
        </div>
      </div>

      {/* Prody */}
      <div>
        <div className="mx-4 md:mx-8">
          <div className="text-2xl md:text-5xl md:mb-4 mb-2 mt-7 md:mt-20 font-head">PRODYOGIKI</div>
          <div className="flex flex-col md:flex-row">
            <div className="box min-w-full md:min-w-[38rem] mb-6 h-80 bg-white">
            <Image
              src="/assets/images/prody/DSC_0268.webp"
              alt=""
              className="w-full h-full object-cover"/>
            </div>
            <div className="text mx-0 md:mx-8 text-white font-desc text:lg md:text-[29px] md:leading-8">
              Prodyogiki, an exciting event hosted by ISTE NIT Hamirpur, brings together technology and engineering enthusiasts to showcase their skills and apply their knowledge practically. The event features interactive sessions, workshops, events, quizzes, and more. At ISTE NIT Hamirpur, we are committed to fostering a culture of technological advancement. Prodyogiki unites various engineering and technical disciplines, setting new standards of excellence at NIT Hamirpur.
            </div>
          </div>
        </div>
        <div className="boxset2 flex flex-col md:flex-row mx-4 md:mx-8">
        <Link href={`/events/prody`}>          <div className="flex bg-white w-full md:w-[38rem] h-[120px] mr-0 md:mr-8 text-black text-xl items-center justify-center font-desc md:mt-0 mt-3 mb-4 md:mb-0 ">View Prodyogiki's Gallery</div></Link>


          <div className="miniboxes flex gap-3 justify-center">
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3">Even Semester</div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3">Audi & Old LH</div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3">Last held in April 2024</div>
          </div>
        </div>
      </div>

      {/* Pahal */}
      <div>
        <div className="mx-4 md:mx-8">
          <div className="text-2xl md:text-5xl md:mb-4 mb-2 mt-7 md:mt-20 font-head">PAHAL</div>
          <div className="flex flex-col md:flex-row">
            <div className="box min-w-full md:min-w-[38rem] mb-6 h-80 bg-white">
            <img
              src="/assets/images/pahal/DSC_0498.webp"
              alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="text mx-0 md:mx-8 text-white font-desc text-lg md:text-[29px] md:leading-8">
              Team ISTE at NIT Hamirpur is taking an initiative called PAHAL to support freshers during the admission process. We understand that starting college can be overwhelming, and that's why we are here to help. Our dedicated help desk and in-person guidance will provide you with the assistance and information you need to navigate the admission process smoothly. With PAHAL, we extend a helping hand, ensuring a confident start to your academic journey and making your transition to college life a seamless experience at NIT Hamirpur.
            </div>
          </div>
        </div>
        <div className="boxset2 flex flex-col md:flex-row mx-4 md:mx-8">
        <Link href={`/events/pahal`}>          <div className="flex bg-white w-full md:w-[38rem] h-[120px] mr-0 md:mr-8 text-black text-xl items-center justify-center font-desc md:mt-0 mt-3 mb-4 md:mb-0 ">View Pahal's Gallery</div></Link>
          <div className="miniboxes flex gap-3 justify-center">
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3">Odd Semester</div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3 font-medium">Audi</div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3">Last held in Aug 2023</div>
          </div>
        </div>
      </div>

      {/* Prarambh */}
      <div>
        <div className="mx-4 md:mx-8">
          <div className="text-2xl md:text-5xl md:mb-4 mb-2 mt-7 md:mt-20 font-desc">PRARAMBH</div>
          <div className="flex flex-col md:flex-row">
            <div className="box min-w-full md:min-w-[38rem] mb-6 h-80 bg-white">
            <Image
              src="/assets/images/prarambh/IMG_4054.webp"
              alt=""className="w-full h-full object-cover" / >
            
            </div>
            <div className="text mx-0 md:mx-8 text-white font-desc text-lg md:text-[29px] md:leading-8">
              "Prarambh" – an exciting event by ISTE NIT Hamirpur that introduces you to the inspiring world of ISTE, a technical society dedicated to fostering innovation and excellence. Experience thrilling technical competitions, engaging workshops, thought-provoking seminars, and much more. Join us to unlock your potential, forge meaningful connections, and embark on a remarkable college journey filled with growth and success. Get ready to ignite your passion with ISTE NIT Hamirpur at Prarambh!
            </div>
          </div>
        </div>
        <div className="boxset2 flex flex-col md:flex-row mx-4 md:mx-8">
        <Link href={`/events/prarambh`}>          <div className="flex bg-white w-full md:w-[38rem] h-[120px] mr-0 md:mr-8 text-black text-xl items-center justify-center font-desc md:mt-0 mt-3 mb-4 md:mb-0 ">View Prarambh's Gallery</div></Link>


          <div className="miniboxes flex gap-3 justify-center">
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3">Odd Semester</div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3 font-medium">Audi</div>
            <div className="w-[120px] h-[120px] bg-[#7D7B7B] items-center justify-center flex font-desc text-lg px-3">Last held in Aug 2023</div>
          </div>
        </div>
      </div>
   </div>
  )
}