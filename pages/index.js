import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Home/Hero';
import BlogCarousel from '../components/Home/BlogCarousel';
import Assistants from '../components/Home/Assistants';
import Profile from '../components/Home/Profile';

export default function Home() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Head>
                <title>IMV Laboratory Official Website</title>
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
            {/* <BlogCarousel /> */}
            <Assistants />
            <Profile />
        </div>
    );
}
