import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../public/logo.webp';
import { VideoCameraIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='sticky top-0 md:-top-12 z-50 flex justify-between items-center h-20 md:h-32 px-4 md:px-8 bg-white border-b border-gray-200'>
            <div className='sticky top-0 flex md:justify-between items-center h-20 w-full'>
                <button
                    onClick={() => setShowMenu(prev => !prev)}
                    className='focus:outline-none block mr-4 md:hidden'>
                    {showMenu ? (
                        <XIcon className='w-8 h-8' />
                    ) : (
                        <MenuIcon className='w-8 h-8' />
                    )}
                </button>
                <Image
                    src={Logo}
                    width={42}
                    height={42}
                    objectFit='contain'
                    alt='IMV Logo'
                />
                <h1 className='hidden md:block mr-auto ml-4 text-lg font-medium tracking-wider uppercase'>
                    IMV Laboratory
                </h1>
                <nav>
                    <ul
                        className={`fixed top-20 left-0 bottom-0 ${
                            showMenu ? 'translate-x-0' : '-translate-x-full'
                        } md:static md:translate-x-0 flex flex-col justify-center md:flex-row gap-10 p-8 w-60 md:w-full md:p-0 bg-white border-r border-gray-200 md:border-0 tracking-wide ease-in-out duration-300`}>
                        <li onClick={() => setShowMenu(prev => !prev)}>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li onClick={() => setShowMenu(prev => !prev)}>
                            <Link href='/people'>
                                <a>People</a>
                            </Link>
                        </li>
                        <li onClick={() => setShowMenu(prev => !prev)}>
                            <Link href='/'>
                                <a>Research & Publication</a>
                            </Link>
                        </li>
                        <li onClick={() => setShowMenu(prev => !prev)}>
                            <Link href='/'>
                                <a>Blog</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button
                    onClick={() =>
                        (document.location.href =
                            'https://webinar.imvlaboratory.com')
                    }
                    className='flex items-center ml-auto md:ml-16 px-4 h-10 rounded-lg bg-blue-500 text-white hover:bg-blue-700 focus:outline-none'>
                    <VideoCameraIcon className='w-6 h-6' />
                    <p className='ml-2 uppercase text-sm font-medium tracking-wide'>
                        JOIN WEBINAR
                    </p>
                </button>
            </div>
        </header>
    );
}
