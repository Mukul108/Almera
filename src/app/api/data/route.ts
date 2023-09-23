// export async function GET(request: Request) {
//     return new Response('Hi, End, By...');
// }

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)

    return new Response(JSON.stringify({ hello: 'World '}))
}