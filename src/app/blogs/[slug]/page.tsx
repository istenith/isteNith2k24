import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams(){

    const files =fs.readdirSync(path.join('src/blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({slug}: {slug: string}){

    const markdownFile = fs.readFileSync(path.join('src/blogs', slug + '.mdx'), 'utf-8')

    const{data: fontMatter, content} = matter(markdownFile)

    return {
        fontMatter,
        slug,
        content
    }

}


export default function Page({ params } :any){
    const props = getPost( params);

    return (


        <div className="min-h-screen      background-color: #1E1E1E; text-white">
            <div className="flex flex-col lg:flex-row ">
                <div className="w-full lg:w-1/5 lg:mt-24 fixed lg:-top-10 pt-7 pb-3 z-50 lg:ml-80 lg:fixed text-slate-200 flex flex-row lg:flex-col  justify-center lg:justify-start   background-color: #1E1E1E;  lg:bg-transparent ">
                    <div className="from-neutral-400 text-6xl lg:text-9xl font-r2 lg:mb-4">B</div>
                    <div className="from-neutral-400 text-6xl lg:text-9xl font-r2 lg:mb-4">L</div>
                    <div className="from-neutral-400 -ml-2 text-6xl lg:text-9xl font-r2 lg:-ml-4 lg:mb-4">O</div>
                    <div className="from-neutral-400 -ml-2 text-6xl lg:text-9xl font-r2 lg:-ml-4 lg:mb-4">G</div>
                    <div className="from-neutral-400 -ml-2 text-6xl lg:text-9xl font-r2 lg:-ml-4 lg:mb-4">S</div>
                </div>

                <div className="w-full  md:w-3/4 md:ml-28 px-4 lg:w-7/12 mt-2 md:mt-4 lg:mt-4 lg:pl-40 lg:ml-116 ">

                    <div className="flex flex-col mt-28 lg:mt-16 ">
                        <div className="border-t-2 border-white"></div>
                        <div className="lg:mt-2 py-2 md:pt-2 px-1 text-2xl md:text-3xl lg:text-3xl font-actor lg:px-2">{props.fontMatter.title}</div>
                        <div className="bg-custom-grayblog-53 rounded-md lg:mt-8 p-2 mt-8 lg:p-6">
                            <div className="lg:text-2xl text-1.2xl mt-1 md:text-2xl font-actor relative">
                          {props.fontMatter.description}
                            </div>
                           
                            <div className="flex lg:flex-row flex-wrap justify-evenly  mt-12">
                                <div className="bg-custom-graytags-60 lg:text-1.5xl mt-4  p-4 rounded-md">{props.fontMatter.tags[0]}</div>
                                <div className=" bg-custom-graytags-60 lg:text-1.5xl p-4 ml-4 mt-4 rounded-md">{props.fontMatter.tags[1]}</div>
                                <div className="bg-custom-graytags-60 lg:text-1.5xl p-4 ml-4 mt-4 rounded-md">{props.fontMatter.tags[2]}</div>
                                <div className="bg-custom-graytags-60 lg:text-1.5xl p-4 ml-4 mt-4 rounded-md">{props.fontMatter.tags[3]}</div>
                            </div>
                            <div className='mt-8 lg:text-1.2xl md:text-1.3xl text-1xl font-actor'><MDXRemote source={props.content} ></MDXRemote></div>
                            
                        </div>
                        <div className='flex flex-row ml-auto sm:ml-auto '>
                        <div className="border-t-2 w-4  border-white mt-6"></div>
                        <div className='mt-4 mb-4 mx-2'>{props.fontMatter.author}</div>
                        </div>
                        
                      
                    </div>

                </div>
            </div>
        </div>
    );

}

     
