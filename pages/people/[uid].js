import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import {
    HashtagIcon,
    BriefcaseIcon,
    BadgeCheckIcon,
} from '@heroicons/react/solid';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { usePerson } from '../../hooks/usePeople';
import Loading from '../../components/Loading';

const details = () => {
    const router = useRouter();
    const { uid } = router.query;

    if (!router.isReady) return <Loading />;

    const { data: person, isLoading } = usePerson(uid);

    if (isLoading) return <Loading />;

    return (
        <>
            <Head>
                <title>{person.fullname}'s Profile | IMV Laboratory</title>
            </Head>
            <div className='max-w-screen-xl mx-auto'>
                <Header />
                <div className='flex items-center mt-6 mb-12'>
                    <button
                        onClick={() => router.back()}
                        className='ml-4 md:ml-0 mr-4 p-2 rounded-lg focus:outline-none'>
                        <ArrowNarrowLeftIcon className='w-6 h-6' />
                    </button>
                    <h1 className='text-2xl font-bold'>Profile</h1>
                </div>
                <div className='mx-auto mb-12 px-4 w-full max-w-4xl'>
                    <div className='flex'>
                        <div>
                            <Image
                                src={person.photoURL}
                                width={150}
                                height={150}
                                // layout='fixed'
                                objectFit='cover'
                                alt='Profile Picture'
                                className='rounded-xl'
                            />
                            {/* <div className='flex justify-between mt-2 px-4'>
                            <a href=''>
                                <FaLinkedin
                                    size={24}
                                    className='text-blue-700'
                                />
                            </a>
                            <a href=''>
                                <FaInstagram
                                    size={24}
                                    className='text-pink-600'
                                />
                            </a>
                            <a href=''>
                                <FaGithub size={24} className='text-gray-900' />
                            </a>
                        </div> */}
                        </div>
                        <div className='ml-8 space-y-2'>
                            <div className='flex items-center font-bold mb-4'>
                                <h1 className='text-4xl'>{person.fullname}</h1>
                                {/* <span className='ml-2 px-2 py-1 self-center text-lg text-blue-500 rounded-lg bg-blue-100'>
                                FAN
                            </span> */}
                            </div>
                            {person.bio && (
                                <div className='flex items-center text-gray-500'>
                                    <HashtagIcon className='mr-2 w-6 h-6' />
                                    <p className=''>{person.bio}</p>
                                </div>
                            )}
                            <div className='flex items-center text-gray-500'>
                                <BriefcaseIcon className='mr-2 w-6 h-6' />
                                <p>{person.imv_role}</p>
                            </div>
                            <div className='flex items-center text-gray-500'>
                                <BadgeCheckIcon className='mr-2 w-6 h-6' />
                                <p>{person.year}</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 p-8 rounded-xl bg-yellow-100'>
                        <h1 className='mb-4 text-xl font-bold'>
                            Quick Biography
                        </h1>
                        <p>{person.professional_summary}</p>
                    </div>

                    <div className='mt-8 p-8 rounded-xl bg-pink-100'>
                        <h1 className='mb-4 text-xl font-bold'>Expertise</h1>
                        {/* <ul className='list-disc ml-8'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul> */}
                    </div>

                    <div className='mt-8 p-8 rounded-xl bg-blue-100'>
                        <h1 className='mb-4 text-xl font-bold'>
                            Research & Publication
                        </h1>
                        {/* <ul className='list-disc ml-8'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default details;
