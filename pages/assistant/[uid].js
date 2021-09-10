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

const details = () => {
    const router = useRouter();
    const { uid } = router.query;

    return (
        <div className='max-w-screen-xl mx-auto'>
            <Head>
                <title>Details - Assistant & Alumni</title>
            </Head>
            <Header />
            <div className='flex items-center mt-6 mb-12'>
                <button
                    onClick={() => router.back()}
                    className='mr-4 p-2 rounded-full hover:shadow-xl ease-linear duration-300 focus:outline-none'>
                    <ArrowNarrowLeftIcon className='w-6 h-6' />
                </button>
                <h1 className='text-2xl font-bold'>Details Page</h1>
            </div>
            <div className='mx-auto mb-12 w-[45em]'>
                <div className='flex'>
                    <div>
                        <Image
                            src='/profile_pict_alfan.jpeg'
                            width={150}
                            height={150}
                            objectFit='contain'
                            alt='Profile Picture'
                            className='rounded-xl'
                        />
                        <div className='flex justify-between mt-2 px-4'>
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
                        </div>
                    </div>
                    <div className='ml-8 space-y-2'>
                        <div className='flex items-center font-bold mb-4'>
                            <h1 className='text-4xl'>Ahmad Alfan</h1>
                            <span className='ml-2 px-2 py-1 self-center text-lg text-blue-500 rounded-lg bg-blue-100'>
                                FAN
                            </span>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <HashtagIcon className='mr-2 w-6 h-6' />
                            <p className=''>I move pixels & write codes</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <BriefcaseIcon className='mr-2 w-6 h-6' />
                            <p>Assistant Coordinator</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <BadgeCheckIcon className='mr-2 w-6 h-6' />
                            <p>2021-2022</p>
                        </div>
                    </div>
                </div>

                <div className='mt-8 p-8 rounded-xl bg-yellow-100'>
                    <h1 className='mb-4 text-xl font-bold'>Quick Biography</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corrupti quisquam ex maiores architecto
                        consequuntur iusto inventore fugit, esse repellat
                        suscipit sapiente harum quas quibusdam dolorem magni,
                        recusandae molestias numquam modi. Voluptatem atque eius
                        vel incidunt. Suscipit, vero similique. Itaque, illo?
                    </p>
                </div>

                <div className='mt-8 p-8 rounded-xl bg-pink-100'>
                    <h1 className='mb-4 text-xl font-bold'>Expertise</h1>
                    <ul className='list-disc ml-8'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>

                <div className='mt-8 p-8 rounded-xl bg-blue-100'>
                    <h1 className='mb-4 text-xl font-bold'>
                        Research & Publication (3)
                    </h1>
                    <ul className='list-disc ml-8'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default details;
