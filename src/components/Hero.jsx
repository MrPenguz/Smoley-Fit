import React from 'react'
import Button from './Button'
import Dragon from '../images/BlueDragon.png'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <img className='mx-auto w-48' src={Dragon} alt="" />
                <p className='text-2xl sm:text-3xl '>It's TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Get<span className='text-blue-400 font-medium'>FLIPPIN' FIT!</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably consistant </span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.
            </p>
            <Button func={() => {
                window.location.href = "#generate"
            }} >
                <p>Accept & Begin</p>
            </Button>
        </div>
    )
}
