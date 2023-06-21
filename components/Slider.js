import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsChevronCompactLeft, BsChevronCompactRight, BsGlobe } from 'react-icons/bs';
import projetos from '../data/projetos';

export default function Slider() {
    const [currentIndex, setIndex] = useState(0)

    const slideRight = () => {
        const isLastSlide = currentIndex === projetos.length - 1;
        const index = isLastSlide ? 0 : currentIndex + 1;
        setIndex(index);
    }

     const slideLeft = () => {
        const isFirstSlide = currentIndex === 0;
        const index = isFirstSlide ? projetos.length - 1 : currentIndex - 1
        setIndex(index);
    }

  return (
    <div>
        <div className='flex flex-row space-x-8 justify-center'>
            <a href={projetos[currentIndex].git} target='_blank'>
                <AiFillGithub className="hover:text-teal-300 text-gray-600 dark:text-white dark:hover:text-teal-300" size={40}/>
            </a>
            <a href={projetos[currentIndex].url} target='_blank'>
                <BsGlobe className='hover:text-teal-300 text-gray-600 dark:text-white dark:hover:text-teal-300' size={40}/>
            </a>
        </div>
        <div className="max-w-[1400px] h-fit w-full m-auto py-6 px-4 relative group">
            <div className={`w-full h-[500px] ${projetos[currentIndex].img} rounded-2xl bg-contain bg-center hover:shadow-xl group-hover:scale-[1.02] cursor-pointer duration-500`}/>
            <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 z-10 text-2xl rounded-full p2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={slideLeft} size={30}/>
            </div>
            <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={slideRight} size={30}/>
            </div>
            <a href={projetos[currentIndex].url} target='_blank'>
                <div className='hidden group-hover:block absolute top-10 w-[85%] h-[80%] right-[7.5%] cursor-pointer'/>
            </a>
            <p className="text-sm leading-2 mt-2 text-center text-gray-800 lg:max-w-full mx-auto dark:text-white">{projetos[currentIndex].txt}</p>
        </div>
    </div>
  );
}
