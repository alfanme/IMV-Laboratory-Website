import Image from 'next/image';

const imagePaths = [
    '/medpart_fix/logo-hmtt.png',
    '/medpart_fix/fisdas-logo.png',
    '/medpart_fix/logo-daskom-potrait.png',
    '/medpart_fix/yot-tangerang.png',
];

export default function MediaPartners() {
    return (
        <div className='text-center'>
            <h1 className='font-bold text-2xl mb-8'>Media Partners</h1>
            <div className='flex flex-wrap justify-center gap-4'>
                {imagePaths.map((path, idx) => (
                    <Image
                        src={path}
                        width={80}
                        height={80}
                        objectFit='contain'
                        key={idx}
                    />
                ))}
            </div>
        </div>
    );
}
