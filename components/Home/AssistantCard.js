import Image from 'next/image';

export default function AssistantCard({ photo, name, code, position, major }) {
    return (
        <div className='flex items-center'>
            <Image
                src={photo}
                width={72}
                height={72}
                className='rounded-full'
            />

            <div className='ml-2'>
                <p className='font-bold'>
                    {name} ({code})
                </p>
                <p className='text-sm italic text-blue-400'>{position}</p>
                <p className='text-sm font-light text-gray-500'>{major}</p>
            </div>
        </div>
    );
}
