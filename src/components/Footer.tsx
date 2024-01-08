import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from 'lucide-react'
import Image from 'next/image'

export function Footer () {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
    <div className='flex items-center gap-3'>
      <Image src='/wecryout.jpg' width={56} height={56} alt='We Cry Out' />
      <div className='flex flex-col gap-1'>
        <strong className='font-normal'>We Cry Out</strong>
        <span className='text-xs text-zinc-400'>Jesus Culture, Kim Walker</span>
      </div>
    </div>
    <div className='flex flex-col items-center'>
      <div className='flex items-center gap-6'>
        <Shuffle width={20} className='text-zinc-200' />
        <SkipBack width={20} className='text-zinc-200' fill='bg-white'/>
        <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
          <Play fill='bg-black'/>
        </button>
        <SkipForward width={20} className='text-zinc-200' fill='bg-black'/>
        <Repeat width={20} className='text-zinc-200' />
      </div>
      <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>2:27</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='h-1 rounded-full bg-zinc-200 w-40'></div>
          </div>
          <span className='text-xs text-zinc-400'>6:13</span>
      </div>
    </div >
    <div className='flex items-center gap-4'>
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className='flex items-center gap-2'>
        <Volume1 size={20} />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
        <div className="h-1 rounded-full bg-white w-10"></div>
      </div>
      <Maximize2 size={20} className='ml-1'/>
      </div>
    </div>
  </footer>
  )
}