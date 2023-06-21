import Image from 'next/image';

export default function ImageContainer(props) {
  return (
        <div className="basis-1/3 flex-1 h-80 mb-5 transition ease-in-out delay-150 transform hover:shadow-xl hover:scale-105 duration-300 cursor-pointer text-2xl">
          <p className=" text-sm leading-2 text-gray-800 lg:max-w-xl mx-auto dark:text-white">{props.txt}</p>
          <Image className="rounded-lg object-cover h-full"
            src={props.src}
            alt='clickable-portfolio-project' />
        </div>
  );
}
