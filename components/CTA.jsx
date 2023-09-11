import React from 'react'

const CTA = () => {
    return (
        <section className='bg-darkViolet flex flex-col items-center justify-center text-white py-16 gap-8 cta_background'>
            <div className='text-3xl md:text-4xl font-bold text-center'>Boost your links today</div>
            <button className='bg-cyan rounded-full py-3 px-14 hover:bg-lightCyan drop-shadow-xl font-semibold text-xl'>
                Get Started
            </button>
        </section>
    )
}

export default CTA