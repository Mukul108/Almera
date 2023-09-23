import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: Request, res: Response) => {
    const underdogApiEndpoint = "https://devnet.underdogprotocol.com";
    const config = {
        headers: { Authorization: `Bearer ${`b08742996a48a9.836e09444ac944f48b0fce2b8f29a6c3`}` }
    };
    const options = {
        method: 'GET',
        url: 'https://devnet.underdogprotocol.com/v2/projects/1/nfts',
        params: {limit: '100'},
        headers: {
          accept: 'application/json',
          authorization: 'Bearer b08742996a48a9.836e09444ac944f48b0fce2b8f29a6c3'
        }
    };
    try{
        const response = await axios.request(options);
        const resp = response.data;
        return NextResponse.json(resp);
    } catch{
        console.log("Error")
    }
}