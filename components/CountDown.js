import { useState, useEffect } from 'react';

export default function CountDown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const eventDate = new Date('Sep 25, 2021 09:30:00 GMT+0700');

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
        <div className='text-center'>
            <h1 className='text-2xl font-bold mb-8'>
                Webinar akan dimulai dalam:
            </h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <p className='w-full md:w-32 py-4 rounded-lg bg-pink-100 text-pink-500 text-2xl font-bold'>
                    {days} hari
                </p>
                <p className='w-full md:w-32 py-4 rounded-lg bg-pink-100 text-pink-500 text-2xl font-bold'>
                    {hours} jam
                </p>
                <p className='w-full md:w-32 py-4 rounded-lg bg-pink-100 text-pink-500 text-2xl font-bold'>
                    {minutes} menit
                </p>
                <p className='w-full md:w-32 py-4 rounded-lg bg-pink-100 text-pink-500 text-2xl font-bold'>
                    {seconds} detik
                </p>
            </div>
        </div>
    );
}
