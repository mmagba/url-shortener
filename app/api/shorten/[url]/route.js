import tinyurl from 'tinyurl-api';



export const GET = async (request, { params }) => {

    const shortenedUrl = await tinyurl(params.url);


    return new Response(JSON.stringify(shortenedUrl), { status: 200 })
}