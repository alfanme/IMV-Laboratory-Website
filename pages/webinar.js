import FormWebinar from '../components/FormWebinar';
import Image from 'next/image';
import Head from 'next/head';
import Logo from '../public/logo.webp';
import { ArrowUpIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import CountDown from '../components/CountDown';
import EventSchedule from '../components/EventSchedule';
import WebinarPrograms from '../components/WebinarPrograms';
import BenefitWebinar from '../components/BenefitWebinar';
import SpeakerProfile from '../components/SpeakerProfile';
import OpeningCopy from '../components/OpeningCopy';
import MediaPartners from '../components/MediaPartners';

const webinar = () => {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <main className='flex flex-col items-center mx-auto px-4 py-16 md:w-[720px]'>
            <Head>
                <title>IMV Data Science Webinar</title>
            </Head>
            <div
                onClick={() => router.push('/')}
                className='w-10 mb-8 cursor-pointer'>
                <Image src={Logo} objectFit='contain' alt='IMV Logo' />
            </div>
            <h1 className='text-3xl md:text-5xl text-center font-bold'>
                "Data Science nggak penting!"
            </h1>
            <h2 className='mt-4 text-xl md:text-2xl text-center font-bold'>
                Benar nggak sih?
            </h2>

            <section className='my-16'>
                <OpeningCopy />
            </section>

            <section className='flex flex-col md:flex-row justify-center gap-16 mb-16'>
                <SpeakerProfile
                    imageURL='/abdan.jpg'
                    name='Muhammad Abdan Mulia'
                    position='Data Scientist di Telkom Indonesia'
                    otherDescription='Ex. AI & Software Engineer di Nodeflux'
                />
                <SpeakerProfile
                    imageURL='/lilian.jpg'
                    name='Lilian Tjong'
                    position='Lead Data Scientist di SayurBox'
                    otherDescription='Ex. Senior Data Scientist di Tokopedia'
                />
            </section>

            <section className='flex flex-col items-center justify-center gap-y-16 mb-16'>
                <EventSchedule />
                <CountDown />
                <WebinarPrograms />
                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-8'>
                        Talkshow dengan narasumber
                        <br />
                        akan dipandu oleh:
                    </h1>
                    <SpeakerProfile
                        imageURL='/aya.jpeg'
                        name='Agniya Tazkiya Aulia'
                        position='S1 Teknik Telekomunikasi di Telkom University'
                        otherDescription='Project Manajer di IMV Laboratory'
                    />
                </div>
                <BenefitWebinar />
            </section>

            <FormWebinar />

            <section className='mt-16'>
                <MediaPartners />
            </section>
            <button
                onClick={scrollToTop}
                className='mt-16 p-4 rounded-full bg-white ring-1 ring-gray-200 hover:shadow-xl hover:ring-0 ease-linear duration-300 focus:outline-none'>
                <ArrowUpIcon className='w-6 h-6 text-gray-900' />
            </button>
            <p className='mt-4 text-sm'>Kembali ke atas</p>
        </main>
    );
};

export default webinar;
