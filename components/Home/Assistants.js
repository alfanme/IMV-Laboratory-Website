import Image from 'next/image';

export default function Assistants() {
    return (
        <div className='p-4 md:p-8 pb-12 mb-8'>
            <h1 className='mb-12 text-center text-2xl font-bold tracking-wide'>
                Assistants In-Charge
            </h1>
            <div className='flex flex-wrap justify-center gap-x-4 gap-y-8 place-items-center'>
                {[...Array(19).keys()].map((_, idx) => (
                    <Image
                        src='/profile_pict_alfan.jpeg'
                        width={100}
                        height={100}
                        objectFit='cover'
                        className='rounded-full'
                    />
                ))}
            </div>
        </div>
    );
}
