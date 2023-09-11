import Image from 'next/image'

const FeatureCard = (props) => {
    return (
        <div className={`bg-white rounded-lg px-8 ${props.className}`}>
            <div className='bg-darkViolet rounded-full flex justify-center items-center w-24 h-24 mx-auto md:mx-0 feature_icon'>
                <Image src={props.logoSrc} width={50} height={50} alt='illustration' />
            </div>
            <div className='text-2xl font-bold md:text-left'>{props.title}</div>
            <div className='text-darkGray text-xl font-medium mb-10 mt-7 md:text-left'>{props.desc}</div>
        </div>
    )
}

export default FeatureCard