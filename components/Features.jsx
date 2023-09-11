import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
    return (
        <section className='bg-lightGray'>
            <div className='custom__container mx-auto text-center py-24'>
                <div>
                    <div className='text-4xl font-bold'>Advanced Statistics</div>
                    <p className="text-darkGray my-6 mb-10 text-xl font-medium max-w-lg mx-auto">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>

                <div className='flex flex-col items-center py-8 md:flex-row'>

                    <FeatureCard title={'Brand Recognition'} desc={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."} logoSrc={'/icon-brand-recognition.svg'} />

                    <div className="vertical_line md:hidden" />
                    <div className="horizontal_line hidden md:block" />

                    <FeatureCard title={'Detailed Records'} desc={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} logoSrc={'/icon-detailed-records.svg'}
                        className={'md:mt-16'} />

                    <div className="vertical_line md:hidden" />
                    <div className="horizontal_line hidden md:block" />

                    <FeatureCard title={'Fully Customizable'} desc={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} logoSrc={'/icon-fully-customizable.svg'} className={'md:mt-32'} />

                </div>


            </div>

        </section>
    )
}

export default Features