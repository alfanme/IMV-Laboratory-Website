import Image from 'next/image';
import Thumbnail from '../../public/blog-thumbnail.webp';

export default function BlogCard() {
    return (
        <div className='h-full bg-white rounded-xl ring-1 ring-gray-200 hover:ring-0 hover:shadow-2xl ease-linear duration-300'>
            <div className='h-56 relative'>
                <Image
                    src={Thumbnail}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-t-xl'
                />
            </div>
            <div className='flex flex-col p-6'>
                <h1 className='text-xl font-bold mb-2'>Lorem, ipsum.</h1>
                <p className='line-clamp-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus rerum molestiae ut accusamus quasi mollitia vel hic
                    necessitatibus id quam dolorem illo molestias dignissimos
                    aliquid suscipit eos quidem, temporibus sit nihil quia!
                    Totam, sapiente voluptatum eveniet eius iure ratione cum
                    voluptate accusantium vero maxime temporibus accusamus
                    repudiandae nisi, illum quibusdam!
                </p>
                <button className='self-end button-link border-gray-900'>
                    Read more
                </button>
            </div>
        </div>
    );
}
