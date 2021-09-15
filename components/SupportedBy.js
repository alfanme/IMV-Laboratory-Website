import Image from 'next/image';

const imagePaths = [
    '/sponsor_fix/telu.png',
    '/sponsor_fix/kedaireka.png',
    '/sponsor_fix/kampus-merdeka.jpeg',
    '/sponsor_fix/liveid.png',
    '/sponsor_fix/fte.png',
    '/sponsor_fix/acreative.png',
];

export default function SupportedBy() {
    return (
        <div className='text-center'>
            <h1 className='font-bold text-2xl mb-8'>Supported by:</h1>
            <div className='flex flex-wrap justify-center gap-x-4 -gap-y-8 md:gap-8'>
                {imagePaths.map((path, idx) => (
                    <Image
                        src={path}
                        width={160}
                        height={160}
                        objectFit='contain'
                        key={idx}
                    />
                ))}
            </div>
        </div>
    );
}
