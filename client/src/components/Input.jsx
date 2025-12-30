import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { useAppContext } from '../Context/AppContext';
import toast from 'react-hot-toast';


const Input = () => {
    const [link, setLink] = useState('');

    const { setShortURL, axios, shortURL, loading, setLoading, setShowResult } = useAppContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!link) {
            toast.error("Please enter a link");
            return;
        }
        setShowResult(true)

        try {   
            setLoading(true)
            const linkCopy = link;
            setLink('');
            const {data}  = await axios.post('/link/shorten', { link: linkCopy })
            if (data.success) {
                setShortURL(data.uRL)
                console.log(data)
                
            }
            else {
                toast.error(data.message)
            }
        }
        catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={(e) => handleSubmit(e)} className="flex h-20 md:h-16 mb-10 w-full max-w-[700px] items-center gap-2 overflow-hidden rounded-full border border-[#4A4E69] bg-white shadow-2xl">
                <span className='flex justify-center items-center w-[30px] relative'><img src={assets.link} draggable="false" className='absolute left-5 pointer-events-none select-none' alt="" /></span>

                <input value={link} onChange={(e) => setLink(e.target.value)} type="url" placeholder="Paste your link here..." className="h-full bg-transparent w-full pl-7 text-xl placeholder-gray-500 outline-none font-light font-serif" required />

                <button type="submit" className="mr-2 h-13 w-56 rounded-full bg-[#22223B] text-sm text-white transition active:scale-95 cursor-pointer shadow-2xl "><span className='text-2xl'>Shorten</span></button>
            </form>
        </div>
    )
}

export default Input
