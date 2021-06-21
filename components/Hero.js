import Image from 'next/image';
import Work from '../public/work.png';
import Flag from '../public/flag.png';
import Calendar from '../public/calendar.png';

export default function Hero() {
    return (
        <div className='flex-1 grid grid-cols-2 grid-rows-2 gap-8 pt-10 pb-16 px-8'>
            <div className='flex flex-col justify-between row-span-2 bg-blue-500 rounded-xl'>
                <div className='mt-8 ml-8'>
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
            <div className='flex pl-8 pr-12 bg-pink-400 rounded-xl'>
                <div className='self-center w-40 object-cover'>
                    <Image src={Flag} objectFit='contain' />
                </div>
                <div className='ml-8 mt-8'>
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
            <div className='flex pl-8 pr-12 bg-yellow-300 text-gray-900 rounded-xl'>
                <div className='self-center w-40 object-cover'>
                    <Image src={Calendar} objectFit='contain' />
                </div>
                <div className='ml-8 mt-8'>
                    <h1 className='text-3xl font-bold tracking-wide'>
                        Save the date!
                    </h1>
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
