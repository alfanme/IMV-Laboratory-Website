import {
    RiInstagramFill,
    RiLineFill,
    RiYoutubeFill,
    RiLinkedinFill,
} from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

export default function Profile() {
    return (
        <div className='grid grid-cols-2 gap-16 items-center p-8 h-96'>
            <div className='h-full w-full'>
                <h1 className='mb-4 text-2xl font-bold tracking-wide'>
                    About Us
                </h1>
                <p className=''>
                    Image Processing & Computer Vision Laboratory (IMV Lab) is a
                    research laboratory under the umbrella of Information &
                    Signal Processing expertise group in Telecommunication
                    Engineering major at Telkom University. In 2021-2022, IMV
                    Lab targeted its research on Image Processing and Computer
                    Vision especially with integration to the upcoming 5G
                    Network Technology at the National (Indonesia) scale.
                </p>
                <div className='flex gap-8 mt-8 text-gray-400'>
                    <RiLineFill size={32} className='hover:text-green-500' />
                    <RiInstagramFill
                        size={32}
                        className='hover:text-pink-500'
                    />
                    <RiYoutubeFill size={32} className='hover:text-red-600' />
                    <RiLinkedinFill size={32} className='hover:text-blue-700' />
                    <MdEmail size={32} className='hover:text-yellow-500' />
                </div>
            </div>
            <div className='h-full w-full'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2749320522166!2d107.62747611456251!3d-6.976852970256606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9194df662b7%3A0x19c06868b3c34800!2sIMV%20LABORATORY!5e0!3m2!1sen!2sid!4v1624265477101!5m2!1sen!2sid'
                    style={{ border: 0, width: '100%', height: '100%' }}
                    className='rounded-xl shadow-2xl'
                    allowfullscreen=''
                    loading='lazy'></iframe>
            </div>
        </div>
    );
}
