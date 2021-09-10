import {
    CalendarIcon,
    ClockIcon,
    LocationMarkerIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export default function EventSchedule() {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center text-center'>
            <h1 className='mb-8 text-2xl font-bold'>
                Pastikan jangan sampai ketinggalan acaranya!
            </h1>
            <div className='flex flex-col gap-y-2 px-12 py-8 rounded-lg text-lg text-gray-500 bg-yellow-100'>
                <div className='flex items-center gap-x-2'>
                    <CalendarIcon className='w-6 h-6' />
                    <p>Sabtu, 25 September 2021</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <ClockIcon className='w-6 h-6' />
                    <p>Pukul 09.30 - 12.00 WIB</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <LocationMarkerIcon className='w-6 h-6' />

                    <p>Zoom Meeting</p>
                    <button
                        onClick={() => router.push('#register')}
                        className='px-2 py-1 rounded-md text-sm font-semibold text-white bg-yellow-500 focus:outline-none'>
                        Dapatkan link
                    </button>
                </div>
            </div>
        </div>
    );
}
