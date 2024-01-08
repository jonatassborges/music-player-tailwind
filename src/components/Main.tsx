import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from 'next/image'

export function Main ( ) {
  return(
    <main className="flex-1 p-6">
    <div className='flex items-center gap-3'>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronLeft />
      </button>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronRight />
      </button>
    </div>

    <h1 className='font-semibold text-4xl mt-10'>Good Afternoon</h1>

    <div className='grid grid-cols-3 gap-4 mt-4'>
      <a href='#' className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
        <Image src='/wecryout.jpg' width={104} height={104} alt='We Cry Out' />
        <strong>We Cry Out</strong>

        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='bg-black'/>
        </button>
      </a>
      <a href='#' className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
        <Image src='/wecryout.jpg' width={104} height={104} alt='We Cry Out' />
        <strong>We Cry Out</strong>

        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='bg-black'/>
        </button>
      </a>
      <a href='#' className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
        <Image src='/wecryout.jpg' width={104} height={104} alt='We Cry Out' />
        <strong>We Cry Out</strong>

        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='bg-black'/>
        </button>
      </a>
      <a href='#' className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
        <Image src='/wecryout.jpg' width={104} height={104} alt='We Cry Out' />
        <strong>We Cry Out</strong>

        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='bg-black'/>
        </button>
      </a>
      <a href='#' className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
        <Image src='/wecryout.jpg' width={104} height={104} alt='We Cry Out' />
        <strong>We Cry Out</strong>

        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='bg-black'/>
        </button>
      </a>
      <a href='#' className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
        <Image src='/wecryout.jpg' width={104} height={104} alt='We Cry Out' />
        <strong>We Cry Out</strong>

        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='bg-black'/>
        </button>
      </a>
    </div>

    <h2 className='font-semibold text-2xl mt-10'>Made For Jonatas Borges</h2>

    <div className='grid grid-cols-7 gap-4 mt-4 justify-center items-center'>
      {/* <a className='col-span-1' href=""></a> */}
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
        <Image src='/yourloveneverfails.jpg' className='w-full rounded-md' width={104} height={104} alt='We Cry Out' />
        <strong className="font-semibold">Your Love Never Fails</strong>
        <span className="text-sm text-zinc-400">Jesus Culture, Chris quilala, Kim Walker and more</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
        <Image src='/yourloveneverfails.jpg' className='w-full rounded-md' width={104} height={104} alt='We Cry Out' />
        <strong className="font-semibold">Your Love Never Fails</strong>
        <span className="text-sm text-zinc-400">Jesus Culture, Chris quilala, Kim Walker and more</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
        <Image src='/yourloveneverfails.jpg' className='w-full rounded-md' width={104} height={104} alt='We Cry Out' />
        <strong className="font-semibold">Your Love Never Fails</strong>
        <span className="text-sm text-zinc-400">Jesus Culture, Chris quilala, Kim Walker and more</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
        <Image src='/yourloveneverfails.jpg' className='w-full rounded-md' width={104} height={104} alt='We Cry Out' />
        <strong className="font-semibold">Your Love Never Fails</strong>
        <span className="text-sm text-zinc-400">Jesus Culture, Chris quilala, Kim Walker and more</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
        <Image src='/yourloveneverfails.jpg' className='w-full rounded-md' width={104} height={104} alt='We Cry Out' />
        <strong className="font-semibold">Your Love Never Fails</strong>
        <span className="text-sm text-zinc-400">Jesus Culture, Chris quilala, Kim Walker and more</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
        <Image src='/yourloveneverfails.jpg' className='w-full rounded-md' width={104} height={104} alt='We Cry Out' />
        <strong className="font-semibold">Your Love Never Fails</strong>
        <span className="text-sm text-zinc-400">Jesus Culture, Chris quilala, Kim Walker and more</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
        <Image src='/yourloveneverfails.jpg' className='w-full rounded-md' width={104} height={104} alt='We Cry Out' />
        <strong className="font-semibold">Your Love Never Fails</strong>
        <span className="text-sm text-zinc-400">Jesus Culture, Chris quilala, Kim Walker and more</span>
      </a>
    </div>
  </main>
  )
}