import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlogCarousel from '../components/BlogCarousel';
import Assistants from '../components/Assistants';
import Profile from '../components/Profile';

export default function Home() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Head>
                <title>Home - IMV Laboratory</title>
            </Head>
            <Header />
            <div className='flex flex-col hero-height'>
                <Hero />
            </div>
            <style jsx>{`
              .hero-height{
                height: : calc(100vh - 8rem);
              }
            `}</style>
            <BlogCarousel />
            <Assistants />
            <Profile />
        </div>
    );
}
