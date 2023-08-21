import Image from 'next/image'

const Hero = () => {
    return (
        <section className='overflow-hidden'>
            <div className="flex flex-col-reverse md:flex-row mx-auto custom__container justify-between mt-20 relative ">

                <div className='flex flex-col mb-32 pt-6 md:pt-14 md:w-7/12 gap-4'>
                    <h1 className='text-5xl md:text-7xl font-bold text-veryDarkBlue text-center md:text-left'>
                        More than just shorter links.
                    </h1>
                    <p className='text-gray font-semibold text-center text-2xl md:text-left md:w-5/6'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <div className="flex justify-center md:justify-start mt-5 ">
                        <button className='bg-cyan text-white rounded-full pb-4 px-14 pt-4 hover:bg-lightCyan drop-shadow-xl max-w-7xl'>
                            Get Started
                        </button>
                    </div>
                </div>

                <div className='overflow-visible hidden md:block absolute md:-right-56 lg:-right-72 xl:-right-96 w-2/3 h-2/3'>
                    <Image src='/illustration-working.svg' width={700} height={700} alt='illustration' />
                </div>


                <div className='md:hidden relative custom__size'>
                    <Image src='/illustration-working.svg' width={4000} height={4000} alt='illustration' />
                </div>
                






            </div>
        </section>
    )
}

export default Hero;