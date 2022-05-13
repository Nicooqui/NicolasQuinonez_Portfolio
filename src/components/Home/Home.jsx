import React, { useEffect, useRef } from 'react';
import './Home.css';

export const Home = () => {

    return (
        <div className='container flex flex-col items-center'>
            <div className='testUno my-12'>
                <img src={`${process.env.PUBLIC_URL}/images/nico_ph.jpg`} className='h-full rounded'/>
            </div>
            <div>
                <div className='flex justify-center'>
                    <img src={`${process.env.PUBLIC_URL}/images/hand_wave.png`} className='w-12 h-12'/>
                    <h2 className='ml-4 text-4xl font-bold place-self-center'>Hi there, I'm</h2>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-5xl py-14 font-bold'>Nicolás Quiñonez</h1>
                </div>
                <div></div>
            </div>
        </div>
    )
}
