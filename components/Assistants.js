import FAN from '../public/profile_pict_alfan.jpeg';
import AssistantCard from './AssistantCard';

export default function Assistants() {
    return (
        <div className='p-8 pb-12 mb-8'>
            <h1 className='mb-12 text-center text-2xl font-bold tracking-wide'>
                Assistants In-Charge
            </h1>
            <div className='grid grid-cols-4 gap-x-4 gap-y-16 place-items-center'>
                {[...Array(19).keys()].map((_, idx) => (
                    <AssistantCard
                        key={idx}
                        photo={FAN}
                        name={'Ahmad Alfan'}
                        code={'FAN'}
                        position={'Assistant Coordinator'}
                        major={'Telecommunication Eng.'}
                    />
                ))}
            </div>
        </div>
    );
}
