import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from "../../components/navbar"
export default function Home() {
  const blogDir = 'src/blogs/';

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (

   <>
   <Navbar/>
    <div className="min-h-screen bg-[#171616]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full z-50 lg:w-1/5 lg:mt-7 lg:ml-80  flex flex-row justify-center lg:flex-col pt-8 lg:pt-3 lg:justify-start lg:bg-transparent">
          <div className="text-6xl lg:text-141px font-barlowb text-white-48 mb-0">B</div>
          <div className="text-6xl lg:text-141px font-barlowb text-white-48 mb-0">L</div>
          <div className="text-white-48 font-barlowb lg:-ml-4 text-6xl lg:text-141px -ml-1 mb-0">O</div>
          <div className="text-white-48 font-barlowb lg:-ml-4 text-6xl lg:text-141px -ml-1 mb-0">G</div>
          <div className="text-white-48 font-barlowb lg:-ml-4 text-6xl lg:text-141px -ml-1 mb-0">S</div>
        </div>

        <div className="md:w-11/12 mx-7 md:px-16 lg:px-8 lg:w-6/12 mt-0 lg:mt-4 lg:p-4 lg:ml-auto lg:mr-28 lg:pr-16">
          {blogs.map((blog, index) => (
            <div
              className={`relative group flex flex-col mt-12 h-36 transition-transform duration-500 ease-in-out ${
                index % 2 === 0
                  ? 'md:animate-slide-in-left'
                  : 'md:animate-slide-in-right'
              } ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              key={blog.slug}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="border-t-2 border-white-60"></div>
              <div className="mt-4 md:text-4xl text-2xl lg:text-[33xl] font-actor text-white-60 group-hover:text-slate-50 hover:cursor-pointer lg:px-1 transition-colors duration-300 cursor-pointer">
                <Link href={'/blogs/' + blog.slug}>
                  {blog.meta.title}
                </Link>
              </div>
              <div className="text-lg mt-8 lg:mt-12"></div>
              <div className="flex flex-row mt-8 lg:mt-12 absolute -bottom-8 lg:-bottom-12 right-0 lg:ml-96">
                <div className="border-t-2 border-white-60 w-4 mt-2"></div>
                <div className="ml-2 -mt-1 text-2xl my-2 text-white-60 font-actor">{blog.meta.author}</div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-end p-4 transition-transform duration-300 transform group-hover:scale-105 group-hover:bg-black/15 rounded-lg opacity-0 group-hover:opacity-60 cursor-pointer">
                <Link href={'/blogs/' + blog.slug} className="text-white flex items-center">



    <div>
      <p> <FaArrowRight /></p>
    </div>




                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
}
