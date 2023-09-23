// // import { NextRequest, NextResponse } from "next/server";
// import axios from 'axios';

// // export async function GET(req: NextRequest, res:NextResponse) 
// //     return new Response('Hi, End, By...');

// export async function POST(req: Request, res:Response) {
  
//     // const body = await req.json()
//     const options = {
//         method: 'POST',
//         url: 'https://devnet.underdogprotocol.com/v2/projects/1/nfts',
//         headers: {
//           accept: 'application/json',
//           'content-type': 'application/json',
//           authorization: 'Bearer b08742996a48a9.836e09444ac944f48b0fce2b8f29a6c3',
//         },
//         data: {
//           name: req.body.name,
//           idea: req.body.idea,
//           image: req.body.image,
//         },
//       };
  
//       try {
//         const response = await axios.request(options);
//         res.status(response.status).json(response.data);
//       } catch (error) {
//         res.status(error.response?.status || 500).json({ error: error.message });
//       } else {
//       res.status(405).end(); // Method Not Allowed
//     // console.log(body)
    
//    // return new Response(JSON.stringify({ hello: 'World '}))
// }
// }

import axios from 'axios';
export async function POST(req: Request, res:Response) {
  // const requestBody = {name,
  //   description,
  // };

  const options = {
    method: 'POST',
    url: 'https://devnet.underdogprotocol.com/v2/projects/1/nfts',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer b08742996a48a9.836e09444ac944f48b0fce2b8f29a6c3'
    },
    data: {
      name: 'newnft',
      symbol: 'UPDG',
      description: 'This is the desc of newnft',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
    }
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}