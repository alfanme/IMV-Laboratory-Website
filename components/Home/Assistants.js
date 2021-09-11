import Image from 'next/image';
import { supabase } from '../../utils/supabaseClient';
import { useState, useEffect } from 'react';

export default function Assistants() {
    const [photoURLs, setPhotoURLs] = useState();

    useEffect(async () => {
        const { data, error } = await supabase
            .from('profiles')
            .select('imv_role, photoURL');
        if (error) console.log(error);
        if (data) {
            // console.log('Data in:', data);

            const imvRolesOrder = [
                'Assistant Coordinator',
                'Assistant Deputy Coordinator',
                'Secretary',
                'Treasurer',
                'Project Manager Coordiantor',
                'Project Manager Member',
                'Creative Coordiantor',
                'Creative Member',
                'External Relation Coordiantor',
                'External Relation Member',
                'Logistic Coordiantor',
                'Logistic Member',
            ];

            let sortedData = [];
            imvRolesOrder.map(role => {
                const dataPerRole = data.filter(
                    d => d.imv_role === role && d.photoURL !== null
                );
                // console.log('dataPerRole:', dataPerRole);
                sortedData = [...sortedData, ...dataPerRole];
            });

            // console.log('sortedData:', sortedData);

            let urls = [];
            sortedData.map(({ photoURL }) => urls.push(photoURL));

            setPhotoURLs(urls);
            // console.log('photoURLs:', photoURLs);
        }
    }, []);

    return (
        <div className='p-4 md:p-8 pb-12 mb-8'>
            <h1 className='mb-12 text-center text-2xl font-bold tracking-wide'>
                Assistants In-Charge
            </h1>
            <div className='flex flex-wrap justify-center gap-x-4 gap-y-8 place-items-center'>
                {photoURLs?.map((photoURL, idx) => (
                    <Image
                        src={photoURL}
                        width={100}
                        height={100}
                        objectFit='cover'
                        className='rounded-full pointer-events-none	'
                        key={idx}
                    />
                ))}
            </div>
        </div>
    );
}
