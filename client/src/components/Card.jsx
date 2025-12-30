import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';


const Card = () => {

  const { loading, shortURL, showResult } = useAppContext();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortURL);
    toast.success("Copied to Clipboard")
    setCopied(true);
  setTimeout(() => setCopied(false), 2000);

  }

  return (
    <div className='mt-15'>
      {showResult && (<div className={`flex justify-center items-center w-full h-5 mt-0`}>
        {loading ?
          <div className='flex gap-2'>
            <span className="w-3 h-3 bg-[#22223B] rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-[#22223B] rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="w-3 h-3 bg-[#22223B] rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>
          :
          <div className='flex flex-col gap-2'>
            <div className=' flex justify-center text-4xl text-[#22223B] opacity-70'>
              Your Short URL is:
            </div>
            <div className='flex justify-center text-xl pl-4 border-2 rounded-2xl h-15'>
              <span className='flex relative items-center justify-center gap-3 h-full'>
                {shortURL}
                <button title='Copy This URL' onClick={handleCopy} className='bg-[#22223B] text-white h-full w-full px-4  rounded-r-xl cursor-pointer'>
                  <img className='h-5 pointer-events-none select-none' src={assets.copy} alt="copy" />
                </button>
              </span>
            </div>
          </div>

        }
      </div>)}

    </div>
  )
}

export default Card
