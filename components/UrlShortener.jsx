'use client'
import { useState, useEffect } from 'react';
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
    const [savedUrls, setSavedUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [emptyInputWarning, setEmptyInputWarning] = useState(false);

    useEffect(() => {
        // Load saved URLs from local storage when the component mounts
        const savedUrlsFromLocalStorage = JSON.parse(localStorage.getItem('savedUrls'));
        if (savedUrlsFromLocalStorage) {
            setSavedUrls(savedUrlsFromLocalStorage);
        }
    }, []);

    const saveUrlToLocalStorage = (originalUrl, shortenedUrl) => {
        const newSavedUrls = [{ originalUrl, shortenedUrl }, ...savedUrls];
        if (newSavedUrls.length > 5) {
            newSavedUrls.pop();
        }
        localStorage.setItem('savedUrls', JSON.stringify(newSavedUrls));
        setSavedUrls(newSavedUrls);
    };


    const handleDelete = (id) => {
        const savedUrlsFromLocalStorage = JSON.parse(localStorage.getItem('savedUrls'));
        savedUrlsFromLocalStorage.splice(id, 1);
        localStorage.setItem('savedUrls', JSON.stringify(savedUrlsFromLocalStorage));
        setSavedUrls(savedUrlsFromLocalStorage);
    }


    const submitHandler = async (event) => {
        setLoading(true);
        event.preventDefault();

        if (originalUrl.trim() === '') {
            setEmptyInputWarning(true);
            setLoading(false);
            return;
        } else {
            setEmptyInputWarning(false);
        }

        const secureURL = ensureHttps(originalUrl);

        const response = await fetch(`/api/shorten/${encodeURIComponent(secureURL)}`);
        let newURL = await response.text();
        newURL = newURL.slice(1, -1);
        setShortenedUrl(newURL);

        // Save the URL to local storage
        saveUrlToLocalStorage(originalUrl, newURL);
        setLoading(false);
        setOriginalUrl('');
    }


    return (
        <section className='bg-gray font-bold text-lg parent'>
            <div className='custom__container mx-auto'>
                <form onSubmit={submitHandler} className='flex flex-col bg-darkViolet p-8 md:p-12 gap-5 rounded-lg child md:flex-row md:justify-center'>
                    <div className='md:w-5/6'>
                        <input
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                            className={`rounded-lg p-3 w-full h-16 ${emptyInputWarning ? 'warning_border placeholder-red' : ''}`}
                            type="text"
                            placeholder='Shorten a link here...' />
                        {emptyInputWarning && <div className='text-red text-sm font-light'>Please add a link</div>}
                    </div>

                    <button type='submit' className={`${loading ? 'bg-gray cursor-none' : 'bg-cyan hover:bg-lightCyan'} h-16 text-white rounded-lg p-3 cursor-pointer md:w-1/6`}>
                        {loading ? 'Shortening...' : 'Shorten It!'}
                    </button>
                </form>

                <ul>
                    <li>
                        {savedUrls.map((url, index) => (
                            <Result key={index} longURL={url.originalUrl} shortURL={url.shortenedUrl} id={index} handleDelete={handleDelete} />
                        ))}
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default UrlShortener