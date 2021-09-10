import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { supabase } from '../utils/supabaseClient';

const FormWebinar = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const [organization, setOrganization] = useState('');

    const handleRegisterWebinar = async () => {
        const participantData = {
            fullname,
            email,
            phone,
            status,
            organization,
            attendance: false,
        };
        const { data, error } = await supabase
            .from('webinar_participants')
            .insert([participantData]);
        if (error) alert(error.message);
        if (data) await console.log(data);
    };

    const inputClass =
        'mt-2 mb-4 px-4 w-full h-12 rounded-md text-gray-900 bg-gray-100 focus:outline-none';
    const labelClass = 'ml-1';
    return (
        <div
            id='register'
            className='w-full p-8 rounded-xl bg-white ring-1 ring-gray-200'>
            <h2 className='mt-2 mb-8 text-2xl font-bold text-center'>
                Yuk, ikutan webinarnya 👇🏻
            </h2>
            <label htmlFor='fullname' className={labelClass}>
                Nama Lengkap
            </label>
            <input
                id='fullname'
                onChange={e => setFullname(e.target.value)}
                type='text'
                className={inputClass}
            />
            <label htmlFor='email' className={labelClass}>
                Alamat email
            </label>
            <input
                id='email'
                onChange={e => setEmail(e.target.value)}
                type='email'
                className={inputClass}
            />
            <label htmlFor='phone' className={labelClass}>
                Nomor HP
            </label>
            <input
                id='phone'
                onChange={e => setPhone(e.target.value)}
                type='phone'
                className={inputClass}
            />
            <label htmlFor='status' className={labelClass}>
                Status
            </label>
            <div className='relative'>
                <select
                    id='status'
                    onChange={e => setStatus(e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value=''>Pilih status / profesi</option>
                    <option value='Mahasiswa'>Mahasiswa</option>
                    <option value='Dosen'>Dosen</option>
                    <option value='Umum'>Umum</option>
                </select>
                <ChevronDownIcon className='absolute top-5 right-4 w-6 h-6 pointer-events-none' />
            </div>
            <label htmlFor='organization' className={labelClass}>
                Asal Perguruan Tinggi / Perusahaan
            </label>
            <input
                id='organization'
                onChange={e => setOrganization(e.target.value)}
                type='text'
                className={inputClass}
            />
            <button
                onClick={handleRegisterWebinar}
                className='w-full mt-2 px-4 h-12 rounded-lg text-white bg-blue-500 hover:bg-blue-700 focus:outline-none'>
                <p className='uppercase text-center text-sm font-medium tracking-wide'>
                    DAFTARKAN SAYA
                </p>
            </button>
        </div>
    );
};

export default FormWebinar;
