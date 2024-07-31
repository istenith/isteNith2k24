import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'


export default function Home() {
  const blogDir  = "src/blogs/";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs =  files.map(filename =>{
    
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')


      const {data: frontMatter} = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }

  })

       
  return (

    <div className="min-h-screen     bg-[#1e1e1e] ">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full z-50  lg:w-1/5 lg:mt-9 lg:ml-80 lg:fixed  flex flex-row justify-center lg:flex-col pt-8 lg:pt-0 bg-[#1e1e1e] lg:justify-start lg:bg-transparent">
          <div className=" text-6xl lg:text-141px  font-r2 text-white-48 mb-1">B</div>
          <div className=" text-6xl lg:text-141px font-r2 text-white-48 mb-1">L</div>
          <div className="text-white-48 font-r2 lg:-ml-4 text-6xl  lg:text-141px  -ml-1 mb-1">O</div>
          <div className="text-white-48 font-r2 lg:-ml-4  text-6xl lg:text-141px  -ml-1 mb-1">G</div>
          <div className="text-white-48 font-r2 lg:-ml-4  text-6xl lg:text-141px -ml-1 mb-0">S</div>
        </div>

        <div className=" md:w-11/12 mx-7 md:px-16 lg:px-8 lg:w-6/12 mt-0 lg:mt-4 lg:p-4 lg:ml-auto lg:mr-28 lg:pr-16  ">
        {blogs.map(blog =>(
       
            <div className="flex flex-col mt-12 relative h-36 " key={blog.meta.title}>
              <div className="border-t-2 border- white-60"></div>
              <div className="mt-4 md:text-4xl text-2xl lg:text-4xl font-r2 text-white-60 hover:text-slate-50 hover:cursor-pointer lg:px-1 ">
              <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                {blog.meta.title}
                </Link>
              </div>
              <div className="text-lg mt-8 lg:mt-12  "></div>
              <div className="flex flex-row mt-8 lg:mt-12 absolute -bottom-8 lg:-bottom-12 right-0 lg:ml-96">
                <div className="border-t-2 border-white-60 w-4 mt-2 "></div>
                <div className="ml-2 -mt-1 text-2xl my-2 text-white-60 font-r2">{blog.meta.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>





  )
}