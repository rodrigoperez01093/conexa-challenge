export const charactersState = [
  {
    character: {
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
    },
  },
  {
    character: {
      episode: [
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
      ],
    },
  },
];

export const mockResult = {
  firstCharacter: [
    {
      id: 1,
      name: "Episode 1",
      air_date: "Some Date",
      episode: "S01E1",
      characters: [],
      url: "https://rickandmortyapi.com/api/episode/1",
    },
    {
      id: 2,
      name: "Episode 2",
      air_date: "Some Date",
      episode: "S01E2",
      characters: [],
      url: "https://rickandmortyapi.com/api/episode/2",
    },
  ],
  sharedEpisodes: [
    {
      id: 2,
      name: "Episode 2",
      air_date: "Some Date",
      episode: "S01E2",
      characters: [],
      url: "https://rickandmortyapi.com/api/episode/2",
    },
  ],
  secondCharacter: [
    {
      id: 2,
      name: "Episode 2",
      air_date: "Some Date",
      episode: "S01E2",
      characters: [],
      url: "https://rickandmortyapi.com/api/episode/2",
    },
    {
      id: 3,
      name: "Episode 3",
      air_date: "Some Date",
      episode: "S01E3",
      characters: [],
      url: "https://rickandmortyapi.com/api/episode/3",
    },
  ],
};
