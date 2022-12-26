import Link from 'next/link'
import { AiOutlineSearch } from "react-icons/ai"

export default function Nav() {
  return (
    <div className="container mx-auto pt-10 flex items-center px-4 md:px-0 z-20">
      <Link href="/">
        <div className="relative font-semibold text-lg text-slate-900 cursor-pointer">
            <span className="p-4 bg-slate-400 rounded-full text-xl mr-2">W.</span>
        </div>
      </Link>

        <div className="relative">
            <input type="text" className="bg-transparent w-8 border-2 border-slate-300 rounded-full h-10 pr-3 pl-10 ease-out duration-200 focus:outline-slate-500 focus:w-40 "/> 
            <div className="absolute left-3 top-2">
              <AiOutlineSearch size={24} color={'rgb(255 255 255)'} />
            </div>
        </div>
    </div>
  )
}
