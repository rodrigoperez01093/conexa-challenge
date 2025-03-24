import Image from 'next/image'
import React from 'react'

const CharacterCard = ({name, image}: any) => {
  return (
    <div className='w-1/3 border h-[100px] border-black rounded-lg flex mt-2 mr-2 ml-2 overflow-hidden'>
        <Image src={image} alt={name} width={100} height={100} />
        <div className='w-1/2 h-full flex flex-col items-center font-semibold px-2'>
            <span>{name}</span>
        </div>
    </div>
  )
}

export default CharacterCard
