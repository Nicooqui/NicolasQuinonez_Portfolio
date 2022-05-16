import React from 'react';
import './Home.css';

export const Home = () => {

    return (
        <div className='container flex flex-col items-center'>
            <div className='testUno mt-24'>
                <img src={`${process.env.PUBLIC_URL}/images/nico_ph.jpg`} className='h-full rounded'/>
            </div>
            <div>
                <div className='flex justify-center'>
                    <img src={`${process.env.PUBLIC_URL}/images/hand_wave.png`} className='w-12 h-12 mt-4'/>
                    <h2 className='ml-4 text-4xl py-6 font-bold place-self-center'>Hi there, I'm</h2>
                </div>
                <div className='flex flex-col justify-center text-center'>
                    <h1 className='text-6xl py-12 font-bold w-62 text-[#6D21B9]'>Nicolás Quiñonez</h1>
                    <h2 className='text-5xl py-12 font-semibold'>Frontend Developer</h2>
                </div>
                <div></div>
            </div>
        </div>
    )
}
