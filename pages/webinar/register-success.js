import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function registerSuccess() {
    const router = useRouter();
    const [data, setData] = useState({});

    useEffect(() => {
        const registration = router.query;
        console.log(registration);
        registration.success && setData(registration);
    }, []);

    return (
        <main className='overflow-hidden relative flex flex-col gap-8 items-center mx-auto px-4 pt-16 pb-4 w-screen min-h-screen md:w-[720px] text-center'>
            <Head>
                <title>Registration Success - IMV Webinar</title>
            </Head>
            <Bubble className='absolute -top-10 -left-20 w-40 h-40 border-[2em] border-pink-50' />
            <Bubble className='absolute top-[5%] -right-32 w-60 h-60 border-[3em] border-blue-100' />
            <Bubble className='absolute -bottom-20 -right-20 w-80 h-80 border-[4em] border-yellow-100' />
            <Bubble className='absolute bottom-[5%] -left-32 w-60 h-60 border-[3em] border-purple-100' />

            {!data.success ? (
                <>
                    <h1 className='mb-8 py-1 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                        Halaman tidak dapat diakses!
                    </h1>
                    <p className='mt-8 text-lg font-semibold'>
                        Kamu belum terdaftar sebagai peserta webinar Data
                        Science IMV Laboratory.
                    </p>
                    <button
                        onClick={() => router.replace('/webinar')}
                        className='flex justify-center items-center gap-x-2 mt-8 px-8 h-12 rounded-lg bg-blue-500 hover:bg-blue-700 text-white focus:outline-none'>
                        <p className='uppercase text-sm font-semibold'>
                            Daftar Sekarang
                        </p>
                    </button>
                </>
            ) : (
                <>
                    <h1 className='mb-8 py-1 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                        Terimakasih, {data.fullname}!
                    </h1>
                    <Image
                        src='/work-done.png'
                        width={150}
                        height={150}
                        objectFit='contain'
                    />
                    <p className='mt-8 text-lg font-semibold'>
                        Kamu telah terdaftar sebagai peserta webinar Data
                        Science IMV Laboratory.
                    </p>
                    <p className='text-lg font-semibold'>
                        Untuk mendapatkan informasi selanjutnya mengenai
                        pelaksanaan webinar dan link Zoom Virtual Meeting,
                        silahkan bergabung pada grup Whatsapp berikut ini.
                    </p>
                    <div className='flex flex-col justify-center items-center mt-8 gap-4'>
                        <button
                            onClick={() =>
                                window.open(
                                    'https://chat.whatsapp.com/Jw0WbcS5Zk3KdsOBm5Yluc',
                                    '_blank'
                                )
                            }
                            className='flex justify-center items-center gap-x-2 w-full px-8 h-12 rounded-lg bg-green-500 hover:bg-green-700 text-white focus:outline-none disabled:bg-gray-500'
                            disabled>
                            <FaWhatsapp size={24} />
                            <p className='uppercase text-sm font-semibold'>
                                Gabung Grup Whatsapp 1 {'(penuh)'}
                            </p>
                        </button>
                        <button
                            onClick={() =>
                                window.open(
                                    'https://chat.whatsapp.com/KKeyCujcAcx5U8XloKjEVv',
                                    '_blank'
                                )
                            }
                            className='flex justify-center items-center gap-x-2 w-full px-8 h-12 rounded-lg bg-green-500 hover:bg-green-700 text-white focus:outline-none disabled:bg-gray-500'>
                            <FaWhatsapp size={24} />
                            <p className='uppercase text-sm font-semibold'>
                                Gabung Grup Whatsapp 2
                            </p>
                        </button>
                    </div>
                    <p className='text-sm mt-8'>
                        ©2021 IMV Laboratory | Bandung, Indonesia 🇮🇩
                    </p>
                </>
            )}
        </main>
    );
}

const Bubble = ({ className }) => {
    return <div className={`z-[-99] rounded-full ${className}`}></div>;
};
