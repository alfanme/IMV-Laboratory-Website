import Header from '../../components/Header';
import Head from 'next/head';
import SideBar from '../../components/People/SideBar';
import MainSection from '../../components/People/MainSection';

const index = () => {
    return (
        <div className='relative max-w-screen-xl mx-auto'>
            <Head>
                <title>Assistant & Alumni</title>
            </Head>
            <Header />
            <div className='flex'>
                {/* <SideBar /> */}
                <MainSection />
            </div>
        </div>
    );
};

export default index;
