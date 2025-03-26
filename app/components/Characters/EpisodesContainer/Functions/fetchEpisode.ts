import { sharedEpisodes } from "../helpers/sharedEpisodes";
/* eslint-disable */
export const fetchEpisode = async (
  charactersState: any,
  setLoading: any,
  setError: any,
  setEpisodes: any
) => {
  try {
    setLoading(true);
    const firstCharacterEpisodes = charactersState[0]?.character?.episode || [];
    const secondCharacterEpisodes =
      charactersState[1]?.character?.episode || [];

    const [firstCharacterData, secondCharacterData] = await Promise.all([
      Promise.all(
        firstCharacterEpisodes.map(async (url: string) => {
          return await fetch(url).then((res) => res.json());
        })
      ),
      Promise.all(
        secondCharacterEpisodes.map(async (url: string) => {
          return await fetch(url).then((res) => res.json());
        })
      ),
    ]);
    const sharedEpisodesData = sharedEpisodes(
      firstCharacterData,
      secondCharacterData
    );
    setEpisodes({
      firstCharacter: firstCharacterData,
      sharedEpisodes: sharedEpisodesData,
      secondCharacter: secondCharacterData,
    });
    setLoading(false);
    setError(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
