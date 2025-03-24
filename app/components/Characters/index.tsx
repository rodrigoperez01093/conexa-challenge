import React from 'react'
import PageLayout from '../Common/Layouts/PageLayout';
import CharactersContainer from './CharactersContainer';
import PageTitle from '../Common/Layouts/PageTitle';
import EpisodesContainer from './EpisodesContainer';

const CharactersView = () => {
  return (
   <PageLayout width='w-[80%]'>
    <PageTitle title='Rick and Morty' />
    <CharactersContainer />
    <EpisodesContainer />
   </PageLayout>
  )
}

export default CharactersView;