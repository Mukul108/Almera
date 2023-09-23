import React, { Key } from 'react'
import imageUrl from '../../public/articles.jpg'
import Image from 'next/legacy/image'
import read from '../styles/Read.module.css';
import axios from 'axios';

//Temporarily
import getMappedData from'./servedata'// '../../public/data/servedata'

export default async function read_items() {
  // API HEREs
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

    const response = await axios.request(options);
    const data = response.data;
    
  return (
      <div className={read.container} >
                {data.results.map((items: {
                  id: Key ; name: string ; description: string
                }) => (
                  <div className="card p-4 items-center text-center px-10">
                    <div className={read.cardDet}>
                      {/* <Image
                          className="object-cover h-80 w-96 justify-start	rounded-lg"
                          src={items.image}
                          alt='Image'
                          width={40}
                          height={80}
                        /> */}
                        <p className={read.titText} key={items.id}>{items.name}</p>
                        <p className='px-3 py-1 overflow-hidden' key={items.id}>{items.description}</p>
                      </div>
                  </div> 
                ))};
      </div>
  )
};
