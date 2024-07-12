import { blogdata } from "../../../../data/blog_data";

export default function blog_description() {
    return (
        <div className="min-h-screen bg-custom-gray text-white">
            <div className="flex flex-row lg:flex-row">
                <div className="w-1/5 fixed lg:w-1/5 lg:mt-24 lg:ml-80 lg:fixed text-slate-200 flex flex-col lg:flex-col mt-28 ml-8 lg:justify-start bg-custom-gray lg:bg-transparent">
                    <div className="from-neutral-400 text-6xl lg:text-9xl font-sans mb-4">B</div>
                    <div className="from-neutral-400 text-6xl lg:text-9xl font-sans mb-4">L</div>
                    <div className="from-neutral-400 -ml-2 text-6xl lg:text-9xl font-sans lg:-ml-4 mb-4">O</div>
                    <div className="from-neutral-400 -ml-2 text-6xl lg:text-9xl font-sans lg:-ml-4 mb-4">G</div>
                    <div className="from-neutral-400 -ml-2 text-6xl lg:text-9xl font-sans lg:-ml-4 mb-4">S</div>
                </div>

                <div className="w-4/5 ml-24 lg:w-7/12 mt-8 lg:mt-4 pl-40 lg:ml-96">
                {blogdata.map((blog, index) => (
                    <div className="flex flex-col mt-16 relative">
                        <div className="border-t-2 border-white"></div>
                        <div className="mt-4 text-2xl lg:text-4xl font-sans ">{blog.blog_title}</div>
                        <div className="bg-custom-color rounded-md mt-4 p-8">
                            <div className="text-1xl">
                          {blog.description}


                          
                            </div>
                            <img
                  src={blog.image}
                  alt=""
                  className="h-64 w-64 drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                />
                            <div className="flex flex-row mt-8">

                                <div className="bg-stone-600 text-3xl p-4 rounded-md">{blog.tags[0]}</div>
                                <div className=" bg-stone-600 text-3xl p-4 ml-4 rounded-md">{blog.tags[1]}</div>
                                <div className="bg-stone-600 text-3xl p-4 ml-4 rounded-md">{blog.tags[2]}</div>
                            </div>
                        </div>
                        
                    </div>
                     ))}
                </div>
            </div>
        </div>
    );
}
