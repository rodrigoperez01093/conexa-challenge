import { CHARACTER_SECTIONS } from '@/config'
import React from 'react'
import CharactersSection from './CharactersSection'

const CharactersContainer = () => {
  return (      
      <div className='w-full h-[300px] flex items-center justify-between bg-white px-2 py-2'>
        {
          CHARACTER_SECTIONS.map((_, index: number) => (
            <CharactersSection key={index} characterSectionId={index} />
          ))
        }
      </div>
  )
}

export default CharactersContainer
