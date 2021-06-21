import Image from 'next/image';
import Logo from '../public/logo.webp';
import { MdBookmark } from 'react-icons/md';

export default function Header() {
    return (
        <header className='sticky -top-12 z-50 flex justify-between items-center h-32 px-8 bg-gray-900 border-b border-gray-800'>
            <div className='sticky top-0 flex justify-between items-center h-20 w-full'>
                <div className='w-8'>
                    <Image src={Logo} objectFit='contain' alt='IMV Logo' />
                </div>
                <h1 className='mr-auto ml-4 text-lg font-medium tracking-wider uppercase'>
                    IMV Laboratory
                </h1>
                <nav>
                    <ul className='flex gap-10 tracking-wide'>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Profile</li>
                        <li>Assistant</li>
                        <li>Research</li>
                    </ul>
                </nav>
                <button className='flex items-center ml-16 px-4 h-10 rounded-lg bg-blue-500 hover:bg-blue-700 focus:outline-none'>
                    <MdBookmark size={24} />
                    <p className='ml-2 uppercase text-sm font-medium tracking-wide'>
                        Workshop
                    </p>
                </button>
            </div>
        </header>
    );
}
