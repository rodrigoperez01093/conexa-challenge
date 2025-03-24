export const fetchEpisode = async(charactersState: any, setLoading: any, setError: any, setEpisodes: any) => {
    try {
        console.log("se ejecuta")
        setLoading(true)
        const firstCharacterEpisodes = charactersState[0]?.character?.episode || [];
        const secondCharacterEpisodes = charactersState[1]?.character?.episode || [];

        const [firstCharacterData, secondCharacterData] = await Promise.all([
        Promise.all(firstCharacterEpisodes.map((url: string) => fetch(url).then(res => res.json()))),
        Promise.all(secondCharacterEpisodes.map((url: string) => fetch(url).then(res => res.json())))
        ]);

        const firstEpisodeIds = new Set(firstCharacterData.map(ep => ep.id));
        const sharedEpisodes = secondCharacterData.filter(ep => firstEpisodeIds.has(ep.id));

        setEpisodes({
        firstCharacter: firstCharacterData,
        sharedEpisodes: sharedEpisodes,
        secondCharacter: secondCharacterData
        });
        setLoading(false)
        setError(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}