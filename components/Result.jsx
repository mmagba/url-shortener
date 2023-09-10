'use client'
const Result = (props) => {
    return (
        <div className='flex flex-col bg-white p-4 gap-3 mx-auto rounded-lg mt-6 md:flex-row md:items-center'>
            <div>{props.longURL}</div>
            <div className="seperator md:invisible"></div>
            <div className='flex flex-col gap-3 md:flex-row md:items-center'>
                <div className='text-cyan font-bold'>{props.shortURL}</div>
                <button className='bg-cyan hover:bg-lightCyan text-white rounded-lg py-2 font-bold text-lg cursor-pointer p-5'>copy</button>
                <button className='bg-red hover:bg-rose-400 text-white rounded-lg py-2 font-bold text-lg cursor-pointer p-5'>Delete</button>
            </div>
        </div>
    )
}

export default Result