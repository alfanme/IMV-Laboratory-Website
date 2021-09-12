import { ChatAlt2Icon, PuzzleIcon, GiftIcon } from '@heroicons/react/solid';

export default function WebinarPrograms() {
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold mb-8'>
                Kegiatan seru pada webinar:
            </h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
                <div className='flex flex-col flex-1 min-w-[15em] max-w-[20em] items-center px-8 md:px-0'>
                    <ChatAlt2Icon className='w-32 h-32 text-yellow-300 mb-2' />
                    <p className='font-semibold text-lg'>Talkshow</p>
                    <p className='text-sm mt-2 text-gray-500'>
                        Ngobrol-ngobrol santai bersama para narasumber untuk
                        mengupas lebih dalam mengenai pentingnya Data Science
                        dalam kehidupan sehari-hari.
                    </p>
                </div>
                <div className='flex flex-col flex-1 min-w-[15em] max-w-[20em] items-center px-8 md:px-0'>
                    <PuzzleIcon className='w-32 h-32 text-pink-300 mb-2' />
                    <p className='font-semibold text-lg'>Games Berhadiah</p>
                    <p className='text-sm mt-2 text-gray-500'>
                        Kuis seru untuk melihat pemahamanmu setelah talkshow
                        dengan narasumber. Sssttt, ada hadiahnya loh!
                    </p>
                </div>
                <div className='flex flex-col flex-1 min-w-[15em] max-w-[20em] items-center px-8 md:px-0'>
                    <GiftIcon className='w-32 h-32 text-blue-300 mb-2' />
                    <p className='font-semibold text-lg'>Penawaran Spesial</p>
                    <p className='text-sm mt-2 text-gray-500'>
                        Penawaran khusus bagi kamu yang ingin belajar lebih
                        lanjut melalui pelatihan IMV Laboratory.
                    </p>
                </div>
            </div>
        </div>
    );
}
