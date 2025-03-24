import React from 'react'
import PageLayout from '../Common/Layouts/PageLayout';
import CharactersContainer from './CharactersContainer';
import PageTitle from '../Common/Layouts/PageTitle';

const CharactersView = () => {
  return (
   <PageLayout width='w-[80%]'>
    <PageTitle title='Rick and Morty' />
    <CharactersContainer />
   </PageLayout>
  )
}

export default CharactersView;