export const sharedEpisodes = (characterOne: any, characterTwo: any) => {
  try {
    const firstEpisodeIds = new Set(characterOne.map((ep: any) => ep.id));
    const sharedEpisodesData = characterTwo.filter((ep: any) =>
      firstEpisodeIds.has(ep.id)
    );
    return sharedEpisodesData;
  } catch (error) {
    console.log("Something went wrong");
  }
};
