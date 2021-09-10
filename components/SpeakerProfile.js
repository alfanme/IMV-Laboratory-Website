import Image from 'next/image';

export default function SpeakerProfile({
    imageURL,
    name,
    position,
    otherDescription,
}) {
    return (
        <div className='text-center'>
            <Image
                src={imageURL}
                width={150}
                height={150}
                objectFit='contain'
                className='rounded-full'
            />
            <div className='mt-4'>
                <p className='text-lg font-bold'>{name}</p>
                <p className='text-sm font-semibold text-blue-500'>
                    {position}
                </p>
                <p className='text-sm italic text-gray-400'>
                    {otherDescription}
                </p>
            </div>
        </div>
    );
}
