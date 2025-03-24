import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterCardsContainer = ({
    characters,
    characterSectionId
}: any) => {
    console.log("datra aaaa", characters)
  return (
    <div className='w-full max-h-[300px] overflow-y-auto flex flex-wrap justify-evenly px-2'>
        {
            characters && characters.length > 0 && characters.map((character: any) => (
                <CharacterCard 
                    key={character.id} 
                    name={character.name} 
                    image={character.image}
                />
            ))
        }
    </div>
  )
}

export default CharacterCardsContainer
