import BlogCard from './BlogCard';

export default function BlogCorousel() {
    return (
        <div className='h-full p-4 md:p-8 mb-8'>
            <h1 className='mb-8 text-2xl font-bold tracking-wide text-center'>
                Latest Blog Posts
            </h1>
            <div className='flex flex-col md:grid md:grid-cols-3 gap-8'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
}
