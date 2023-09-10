'use client'
import { useState } from 'react';
import Result from './Result'



//the 3rd party api does not work if the URL doesnt start with https
const ensureHttps = (url) => {
    if (!url.startsWith('https://')) {
        url = 'https://' + url;
    }
    return url;
}

const UrlShortener = () => {

    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        const secureURL = ensureHttps(originalUrl);

        const response = await fetch(`/api/shorten/${encodeURIComponent(secureURL)}`);
        let newURL = await response.text();
        newURL = newURL.slice(1, -1);
        setShortenedUrl(newURL);
    }


    return (
        <section className='bg-gray font-bold text-lg parent'>
            <div className='custom__container mx-auto'>
                <form onSubmit={submitHandler} className='flex flex-col bg-darkViolet p-8 md:p-12 gap-5 rounded-lg child md:flex-row md:justify-center'>
                    <input
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        className='rounded-lg p-3 md:w-5/6'
                        type="text"
                        placeholder='Shorten a link here...' />

                    <button type='submit' className='bg-cyan hover:bg-lightCyan text-white rounded-lg p-3 cursor-pointer md:w-1/6'>Shorten It!</button>
                </form>
                <Result longURL={'https://www.agbadev.com/'} shortURL={'https://bitly.ws/Uk5d'} />
                <Result longURL={'https://www.agbadev.com/'} shortURL={'https://bitly.ws/Uk5d'} />
                <Result longURL={'https://www.agbadev.com/'} shortURL={'https://bitly.ws/Uk5d'} />
            </div>
        </section>
    )
}

export default UrlShortener