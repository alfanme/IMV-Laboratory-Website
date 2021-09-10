import Image from 'next/image';

const imagePaths = [
    '/medpart_fix/biospin-elektro.png',
    '/medpart_fix/tosca-tt.png',
    '/medpart_fix/dsp-tt.png',
    '/medpart_fix/sekon-tf.png',
    '/medpart_fix/logo-hmtt.png',
    '/medpart_fix/siskom-tt.png',
    '/medpart_fix/dastran-tt.png',
    '/medpart_fix/sisjar-si.png',
    '/medpart_fix/ismile-tk.png',
    '/medpart_fix/skd-elektro.png',
    '/medpart_fix/erp-si.png',
    '/medpart_fix/rnest-tk.png',
    '/medpart_fix/mersi-tf.png',
    '/medpart_fix/fisdas-logo.png',
    '/medpart_fix/meka-tf.png',
    '/medpart_fix/logo-daskom-potrait.png',
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
