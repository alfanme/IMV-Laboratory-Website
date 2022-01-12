import Image from 'next/image';
import { usePeople } from '../../hooks/usePeople';
import Loading from '../Loading';
import { useRouter } from 'next/router';

export default function Assistants() {
    const router = useRouter();
    const { data: assistants, isLoading } = usePeople();

    if (isLoading) return <Loading />;

    return (
        <div className='p-4 md:p-8 pb-12 mb-8'>
            <h1 className='mb-12 text-center text-2xl font-bold tracking-wide'>
                Assistants In-Charge
            </h1>
            <div className='flex flex-wrap justify-center gap-x-4 gap-y-8 place-items-center'>
                {assistants?.map((assistant, idx) => (
                    <div
                        onClick={() =>
                            router.push(`/people/${assistant.user_id}`)
                        }
                        key={idx}
                        className='cursor-pointer'>
                        <Image
                            src={assistant.photoURL}
                            width={100}
                            height={100}
                            objectFit='cover'
                            className='rounded-full pointer-events-none'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
