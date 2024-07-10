import { blogdata } from "../../../data/blog_data";

export default function blogs() {
  return (
    <div className="min-h-screen bg-custom-gray text-white">
      <div className="flex flex-row lg:flex-row">
        <div className="w-1/5 fixed lg:w-1/5 lg:mt-16 lg:ml-60 lg:fixed text-slate-200 flex flex-col lg:flex-col mt-24 ml-8 lg:justify-start bg-custom-gray lg:bg-transparent">
          <div className="from-neutral-400 text-6xl lg:text-9xl font-sans mb-4">B</div>
          <div className="from-neutral-400 text-6xl lg:text-9xl font-sans mb-4">L</div>
          <div className="from-neutral-400 -ml-1 text-6xl  lg:text-9xl font-sans -ml-4 mb-4">O</div>
          <div className="from-neutral-400 -ml-1 text-6xl lg:text-9xl font-sans -ml-4 mb-4">G</div>
          <div className="from-neutral-400  -ml-1 text-6xl lg:text-9xl font-sans -ml-4 mb-4">S</div>
        </div>

        <div className="w-4/5 ml-24 lg:w-7/12 mt-8 lg:mt-16 p-4 lg:ml-128">
          {blogdata.map((blog, index) => (
            <div className="flex flex-col mt-12 relative" key={index}>
              <div className="border-t-2 border-white"></div>
              <div className="mt-4 text-2xl lg:text-4xl font-sans text-slate-300 transition duration-300 ease-in-out transform hover:text-slate-50 hover:scale-105  ">
                {blog.blog_title}
              </div>
              <div className="text-lg mt-8 lg:mt-16 font-sans tracking-expanded"></div>
              <div className="flex flex-row mt-8 lg:mt-12 absolute -bottom-8 lg:-bottom-12 right-0 lg:ml-96">
                <div className="border-t-2 w-4 mt-2"></div>
                <div className="ml-2 -mt-1 text-1xl">{blog.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}