import { useState, useEffect } from 'react';

export default function CountDown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const eventDate = new Date('Sep 25, 2021 9:30:00 GMT+0700');

        const counter = setInterval(() => {
            let now = new Date().getTime('GMT+0700');
            let distance = eventDate - now;

            let d = Math.floor(distance / (1000 * 60 * 60 * 24));
            let h = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);

            if (distance < 0) {
                clearInterval();
            }
        }, 1000);
        return () => clearInterval(counter);
    }, []);

    return (
        <div className='text-center w-full'>
            <h1 className='text-2xl font-bold mb-8'>
                Webinar akan dimulai dalam:
            </h1>
            {days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ? (
                <div className='p-8 rounded-lg text-pink-500 bg-pink-100'>
                    <p className='text-2xl font-bold'>
                        Masa pendaftaran berakhir :(
                    </p>
                </div>
            ) : (
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className='w-full p-4 rounded-lg bg-white shadow-lg'>
                        <p className='text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                            {days} hari
                        </p>
                    </div>
                    <div className='w-full p-4 rounded-lg bg-white shadow-lg'>
                        <p className='text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                            {hours} jam
                        </p>
                    </div>
                    <div className='w-full p-4 rounded-lg bg-white shadow-lg'>
                        <p className='text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                            {minutes} menit
                        </p>
                    </div>
                    <div className='w-full p-4 rounded-lg bg-white shadow-lg'>
                        <p className='text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500'>
                            {seconds} detik
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
