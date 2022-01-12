import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const PersonCard = ({ person }) => {
    return (
        <div className='flex p-4 rounded-lg'>
            <div className='mr-4'>
                <Image
                    src={person.photoURL}
                    width={64}
                    height={64}
                    layout='fixed'
                    objectFit='cover'
                    alt='Profile Picture'
                    className='rounded-md'
                />
            </div>
            <div>
                <p className='font-bold'>{person.fullname}</p>
                <p className='text-sm text-gray-400'>{person.imv_role}</p>
                <p className='text-sm text-gray-400'>{person.year}</p>
                <Link href={`/people/${person.user_id}`}>
                    <a className='flex items-center mt-2 text-sm gap-x-1 hover:gap-x-2 ease-out duration-300 text-blue-500'>
                        Visit profile
                        <ArrowNarrowRightIcon className='w-4 h-4' />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default PersonCard;
