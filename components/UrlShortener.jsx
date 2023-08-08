'use client'

import React, { useState } from 'react';

const UrlShortener = () => {

    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleShortenUrl = async () => {

        const response = await fetch(`/api/shorten/${originalUrl}`);
        setShortenedUrl(await response.json());

    };


    return (
        <div>
            <h2>TinyURL Shortener</h2>
            <div>
                <label>Original URL:</label>
                <input
                    type="text"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleShortenUrl}>Shorten URL</button>
            </div>
            {shortenedUrl && (
                <div>
                    <p>Shortened URL:</p>
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                        {shortenedUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default UrlShortener;
