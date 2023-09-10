export const GET = async (request, { params }) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let linkToShorten = decodeURIComponent(params.url);

    try {
        const requestBody = JSON.stringify({
            destination: linkToShorten,
        });

        const response = await fetch('https://api.rebrandly.com/v1/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey,
            },
            body: requestBody,
        });

        if (response.status === 200) {
            const result = await response.json();
            return new Response(JSON.stringify(result.shortUrl), { status: 200 });

        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}


