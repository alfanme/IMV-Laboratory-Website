import Image from 'next/image';
import Work from '../../public/work.png';
import Flag from '../../public/flag.png';
import Calendar from '../../public/calendar.png';

export default function Hero() {
    return (
        <div className='flex flex-col md:flex-1 md:grid md:grid-cols-2 md:grid-rows-2 gap-8 pt-4 md:pt-10 pb-16 px-4 md:px-8 text-white'>
            <div className='flex flex-col justify-between md:row-span-2 pt-8 px-8 bg-blue-500 rounded-xl'>
                <div className='mb-8 w-40 md:w-full z-10'>
                    <h1 className='text-3xl font-bold tracking-wide'>
                        Imagine it, become it, live it!
                    </h1>
                    <p className='mt-2'>
                        Bring your ideas into real-world solutions.
                    </p>
                    <button className='button-link'>Learn more</button>
                </div>
                <div className='-mt-24 w-96 self-center'>
                    <Image src={Work} objectFit='contain' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-8 p-8 bg-pink-400 rounded-xl'>
                <div className='self-center w-40 object-cover'>
                    <Image src={Flag} objectFit='contain' />
                </div>
                <div className='md:mr-8'>
                    <h1 className='text-3xl font-bold tracking-wide'>
                        Be the part of AI-world
                    </h1>
                    <p className='mt-2'>
                        Together we make a better world with Artificial
                        Intelligence.
                    </p>
                    <button className='button-link'>
                        Explore our researches
                    </button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-8 p-8 bg-yellow-300 text-gray-900 rounded-xl'>
                <div className='self-center w-40 object-cover'>
                    <Image src={Calendar} objectFit='contain' />
                </div>
                <div className='md:mr-8'>
                    <h1 className='text-3xl font-bold tracking-wide'>
                        Save the date!
                    </h1>
                    <div></div>
                    <p className='mt-2'>
                        Upcoming workshops: Basic Data Scince, Basic AI, & Basic
                        Computer Vision
                    </p>
                    <button className='button-link border-gray-900'>
                        Join the waitlists
                    </button>
                </div>
            </div>
        </div>
    );
}
