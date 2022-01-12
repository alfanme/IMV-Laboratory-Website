import PersonCard from './PersonCard';
import { usePeople } from '../../hooks/usePeople';
import Loading from '../Loading';

const MainSection = () => {
    const { data: people, isLoading } = usePeople();

    if (isLoading) return <Loading />;

    return (
        <div className='px-4 py-8 w-full'>
            <h1 className='text-2xl text-center font-bold'>Meet Our People</h1>
            <div className='grid md:grid-cols-4 gap-8 mt-12'>
                {people?.map((person, idx) => (
                    <PersonCard person={person} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default MainSection;
