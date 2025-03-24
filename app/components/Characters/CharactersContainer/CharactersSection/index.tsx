"use client";
import React, { useEffect, useState } from 'react'
import { fetchCharacters } from './Functions/fetchCharacters'
import { filtersProps } from '@/interfaces/interfaces';
import filtersInitialState from "./Filters/Resources/filtersInitialState.json"
import Filters from './Filters';
import CharacterCardsContainer from './CharacterCardsContainer';
import { Pagination } from '@mui/material';
import LoadAndDisplaySection from '@/app/components/Common/Layouts/LoadAndDisplaySection';

const CharactersSection = ({characterSectionId}: any) => {
  const [filters, setFilters] = useState<filtersProps>({
    ...filtersInitialState
  });
  const [paging, setPaging] = useState({
    page: 1
  });
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCharacters(filters, paging, setData, setLoading)
  }, [filters, paging])    
  
  return (
    <div className='w-1/2 h-full first:mr-2 last:ml-2 shadow-lg border border-primary rounded-lg px-2 py-2'>
      <Filters 
        filters={filters}
        setFilters={setFilters}
        setPaging={setPaging}
      />
      <LoadAndDisplaySection loading={loading} error={false}>
        <CharacterCardsContainer characters={data?.results} characterSectionId={characterSectionId} />
        <div className='w-full flex items-center justify-center mt-2'>
          <Pagination count={data?.info?.pages} page={paging.page} color="primary" onChange={(e: React.ChangeEvent<unknown>, value) => { setPaging({ ...paging, page: value }) }} />
        </div>
      </LoadAndDisplaySection>
    </div>
  )
}

export default CharactersSection
