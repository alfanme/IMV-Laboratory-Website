import {
    CalendarIcon,
    ClockIcon,
    VideoCameraIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export default function EventSchedule() {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center text-center'>
            <h1 className='mb-8 text-2xl font-bold'>
                Pastikan jangan sampai ketinggalan acaranya!
            </h1>
            <div className='flex flex-col gap-y-4 px-12 py-8 rounded-lg text-lg bg-white shadow-lg'>
                <div className='flex items-center gap-x-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                    <CalendarIcon className='w-8 h-8 text-blue-500' />
                    <p className='text-lg'>Sabtu, 25 September 2021</p>
                </div>
                <div className='flex items-center gap-x-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                    <ClockIcon className='w-8 h-8 text-blue-500' />
                    <p className='text-lg'>Pukul 09.30 - 12.00 WIB</p>
                </div>
                <div className='flex items-center gap-x-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                    <VideoCameraIcon className='w-8 h-8 text-blue-500' />

                    <p className='text-lg'>Zoom Meeting</p>
                    <button
                        onClick={() => router.push('#register')}
                        className='px-2 py-1 rounded-md text-sm font-medium uppercase text-white bg-pink-500 focus:outline-none'>
                        Daftar
                    </button>
                </div>
            </div>
        </div>
    );
}
