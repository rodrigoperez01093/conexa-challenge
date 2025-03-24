"use client"
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import LoadAndDisplaySection from '../../Common/Layouts/LoadAndDisplaySection'
import { fetchEpisode } from './Functions/fetchEpisode'
import EpisodeSection from './EpisodeSection'

const EpisodesContainer = () => {
  const [error, setError] = useState(true)
  const [loading, setLoading] = useState(false)
  const [episodes, setEpisodes] = useState({
    firstCharacter: [],
    sharedEpisodes: [],
    secondCharacter: []
  })
  const charactersState = useAppSelector(state => state.characters.charactersSelected)

  useEffect(() => {
    const hasUndefinedCharacter = charactersState.some((section: any) => section.character === undefined);

    if (hasUndefinedCharacter) {
      setError(true);
      return;
    }
    fetchEpisode(charactersState, setLoading, setError, setEpisodes)
  }, [charactersState])

  console.log("estados", episodes)
  
  return (
    <LoadAndDisplaySection loading={loading} error={error} loadingMessage={"Searching episodes..."} errorMessage='Please select both characters to see episodes'>
        <div className='border rounded-lg w-full h-full flex flex-row items-center justify-between px-2 py-2'>
        <EpisodeSection episodes={episodes.firstCharacter} title={`${charactersState[0].character?.name} episodes`} />
        <EpisodeSection episodes={episodes.sharedEpisodes} />
        <EpisodeSection episodes={episodes.secondCharacter} title={`${charactersState[1].character?.name} episodes`} />
    </div>
      </LoadAndDisplaySection>
  )
}

export default EpisodesContainer
