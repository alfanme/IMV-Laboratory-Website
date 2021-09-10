import Image from 'next/image';

export default function ModeratorDetails() {
    return (
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl font-bold mb-8'>
                Talkshow dengan narasumber
                <br />
                akan dipandu oleh:
            </h1>
            <Image
                src='/aya.jpeg'
                width={150}
                height={150}
                objectFit='contain'
                className='rounded-full'
            />
            <div className='mt-4'>
                <p className='text-lg font-bold'>Agniya Tazkiya Aulia</p>
                <p className='text-sm text-blue-500'>
                    S1 Teknik Telekomunikasi di Telkom University
                </p>
                <p className='text-sm italic text-gray-400'>
                    Project Manager di IMV Laboratory
                </p>
            </div>
        </div>
    );
}
