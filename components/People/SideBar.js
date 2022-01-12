import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';

const SideBar = () => {
    const checkboxClass = 'ml-2 cursor-pointer';
    const inputClass =
        'mt-2 mb-4 px-4 w-full h-12 rounded-md text-gray-900 bg-gray-100 focus:outline-none';
    const [years, setYears] = useState([]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const established = 2010;

        let periods = [];

        for (let year = currentYear; year >= established; year--) {
            const period = `${year}-${year + 1}`;
            periods.push(period);
        }

        setYears(periods);
        console.log(years);
    }, []);

    return (
        <div className='sticky top-32 w-[20em] px-4 py-8'>
            <h1 className='ml-1 text-2xl font-bold'>Find & Filter</h1>
            <input
                type='text'
                placeholder='Search by name'
                className='mt-6 px-4 w-full h-12 rounded-lg bg-gray-100 focus:outline-none'
            />
            <div className='mt-6 space-y-2'>
                <h2 className='ml-1 mb-2 font-bold'>Filter by status</h2>
                <input
                    type='radio'
                    name='status'
                    value='assistants'
                    id='assistants'
                    className={checkboxClass}
                />
                <label htmlFor='assistants' className={checkboxClass}>
                    Assistants
                </label>
                <br />
                <input
                    type='radio'
                    name='status'
                    value='alumni'
                    id='alumni'
                    className={checkboxClass}
                />
                <label htmlFor='alumni' className={checkboxClass}>
                    Alumni
                </label>
                <br />
                <input
                    type='radio'
                    name='status'
                    value='all'
                    id='all'
                    className={checkboxClass}
                />
                <label htmlFor='all' className={checkboxClass}>
                    All
                </label>
            </div>
            <div className='mt-6'>
                <h2 className='ml-1 mb-2 font-bold'>Filter by year</h2>
                <div className='relative'>
                    <select
                        id='year'
                        className={`${inputClass} appearance-none cursor-pointer`}>
                        {years.map((year, idx) => (
                            <option key={idx} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    <ChevronDownIcon className='absolute top-5 right-4 w-6 h-6 pointer-events-none' />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
