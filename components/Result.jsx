'use client'

import { useState } from "react";

const Result = (props) => {
    const [copied, setCopied] = useState("");

    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(props.shortURL);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleDelete = () => {
        props.handleDelete(props.id);
    }


    return (
        <div className='flex flex-col bg-white p-4 gap-3 mx-auto rounded-lg mt-6 md:flex-row md:items-center'>
            <div className="flex-child">{props.longURL}</div>
            <div className="seperator md:invisible"></div>
            <div className='flex flex-col gap-3 md:flex-row md:items-center'>
                <div className='text-cyan font-bold'>{props.shortURL}</div>
                <button
                    onClick={handleCopy}
                    className={` text-white rounded-lg py-2 font-bold text-lg cursor-pointer p-5 ${copied ? 'bg-darkViolet' : 'bg-cyan hover:bg-lightCyan'}`}>
                    {
                        copied === true
                            ? 'Copied!'
                            : 'Copy'
                    }
                </button>
                <button
                    className='bg-red hover:bg-rose-400 text-white rounded-lg py-2 font-bold text-lg cursor-pointer p-5'
                    onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Result