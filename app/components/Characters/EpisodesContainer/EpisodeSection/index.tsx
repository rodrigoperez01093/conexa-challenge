import React from 'react'
import EpisodeCard from './EpisodeCard'

const EpisodeSection = ({episodes, title}: any) => {
  return (
    <div className='w-1/4 px-4 max-h-[300px] text-center overflow-y-auto overflow-x-hidden'>
      <span>{title}</span>
      {
        episodes && episodes.length > 0 && episodes.map((ep: any, i:number) => (
            <EpisodeCard 
                key={i}
                name={ep.name}
                episode={ep.episode}
                broadcasted={ep.air_date}
            />
        ))
      }
    </div>
  )
}

export default EpisodeSection
