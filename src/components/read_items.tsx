import React from 'react'
import imageUrl from '../../public/articles.jpg'
import Image from 'next/legacy/image'

export default function read_items() {
  return (
    <div className="card shadow-xl bg-neutral text-neutral-content w-1/4">
        <div className="relative h-80 flex flex-col w-">
          <Image
            className="object-cover h-80 w-96 aspect-square	"
            src={imageUrl}
            alt='Image'
          />
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title m-0">title</h2>
      </div>
    </div>
    </div>
  )
}
