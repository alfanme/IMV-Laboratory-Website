import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

export const AssistantCard = ({ assistant }) => {
    return (
        <div className='flex p-4 rounded-lg hover:shadow-2xl ease-linear duration-300'>
            <div className='mr-4'>
                <Image
                    src={assistant.photo}
                    width={64}
                    height={64}
                    objectFit='contain'
                    alt='Profile Picture'
                    className='rounded-md'
                />
            </div>
            <div>
                <p className='font-bold'>{assistant.name}</p>
                <p className='text-sm italic text-gray-400'>{assistant.bio}</p>
                <p className='text-sm text-gray-400'>{assistant.position}</p>
                <p className='text-sm text-gray-400'>{assistant.year}</p>
                <Link href={`/assistant/${assistant.uid}`}>
                    <a className='flex items-center mt-2 text-sm gap-x-1 hover:gap-x-2 ease-out duration-300 text-blue-500'>
                        Visit profile
                        <ArrowNarrowRightIcon className='w-4 h-4' />
                    </a>
                </Link>
            </div>
        </div>
    );
};
