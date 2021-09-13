import {
    LightBulbIcon,
    AcademicCapIcon,
    BadgeCheckIcon,
    UserGroupIcon,
} from '@heroicons/react/solid';

export default function BenefitWebinar() {
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold mb-8'>
                Apa aja sih "benefit" ikutan webinar ini?
            </h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
                <div className='flex flex-col flex-1 min-w-[15em] md:max-w-[20em] items-center px-8 md:px-0'>
                    <AcademicCapIcon className='w-32 h-32 text-pink-300 mb-2' />
                    <p className='font-bold text-lg'>Pemahaman Data Science</p>
                    <p className='mt-2 text-gray-500'>
                        Lebih paham tentang Data Science langsung dari Data
                        Scientist profesional.
                    </p>
                </div>
                <div className='flex flex-col flex-1 min-w-[15em] md:max-w-[20em] items-center px-8 md:px-0'>
                    <LightBulbIcon className='w-32 h-32 text-yellow-300 mb-2' />
                    <p className='font-bold text-lg'>Percakapan Inspiratif</p>
                    <p className='mt-2 text-gray-500'>
                        Menjadi lebih yakin untuk belajar dan berkarir di dunia
                        Data Science.
                    </p>
                </div>
                <div className='flex flex-col flex-1 min-w-[15em] md:max-w-[20em] items-center px-8 md:px-0'>
                    <BadgeCheckIcon className='w-32 h-32 text-blue-300 mb-2' />
                    <p className='font-bold text-lg'>E-Sertifikat</p>
                    <p className='mt-2 text-gray-500'>
                        Bukti pengalaman mengikuti webinar yang bisa kamu
                        masukkan ke CV.
                    </p>
                </div>
                <div className='flex flex-col flex-1 min-w-[15em] md:max-w-[20em] items-center px-8 md:px-0'>
                    <UserGroupIcon className='w-32 h-32 text-purple-300 mb-2' />
                    <p className='font-bold text-lg'>Networking</p>
                    <p className='mt-2 text-gray-500'>
                        Berkenalan dan berinteraksi langsung dengan Data
                        Scientist profesional.
                    </p>
                </div>
            </div>
        </div>
    );
}
