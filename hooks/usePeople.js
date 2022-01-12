import { useQuery } from 'react-query';
import { supabase } from '../utils/supabaseClient';

const sortByRoles = people => {
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
        const dataPerRole = people.filter(
            d => d.imv_role === role && d.photoURL !== null
        );
        // console.log('dataPerRole:', dataPerRole);
        sortedData = [...sortedData, ...dataPerRole];
    });

    return sortedData;
};

const getPeople = async () => {
    const { data, error } = await supabase.from('profiles').select();

    if (error) throw new Error(error.message);
    const sortedData = sortByRoles(data);
    return sortedData;
};

export const usePeople = () => {
    return useQuery('people', getPeople);
};

const getPerson = async userId => {
    const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('user_id', userId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

export const usePerson = userId => {
    return useQuery('person', () => getPerson(userId));
};
