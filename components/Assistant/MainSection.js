import { AssistantCard } from './AssistantCard';

const MainSection = () => {
    const assistant = {
        uid: 1,
        name: 'Ahmad Alfan',
        bio: 'I move pixels & write codes',
        position: 'Assistants Coordinator',
        year: '2021-2022',
        photo: '/profile_pict_alfan.jpeg',
    };

    return (
        <div className='ml-4 px-4 py-8 w-full'>
            <h1 className='text-2xl text-center font-bold'>
                Assistants & Alumni
            </h1>
            <div className='grid grid-cols-3 gap-8 mt-12'>
                {[...Array(11).keys()].map(idx => (
                    <AssistantCard assistant={assistant} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default MainSection;
