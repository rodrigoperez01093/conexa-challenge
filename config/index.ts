 export const endpoints = (name: string): string => {
  
    const endpoints: any = {
      characters: "https://rickandmortyapi.com/api/character",
      locations: "https://rickandmortyapi.com/api/location",
      episodes: "https://rickandmortyapi.com/api/episode"  
    };
    return endpoints[name];
  };
  
export const CHARACTER_SECTIONS = ['leftSection', 'rightSection'];
export const CHARACTER_STATUS = ['Alive', 'Dead', 'Unknown'];
export const CHARACTER_GENDER = ['Male', 'Female', 'Genderless'];