import { fetchEpisode } from "./fetchEpisode";
import { charactersState, mockResult } from "./mockData";

global.fetch = jest.fn(async (input) => {
  const url =
    typeof input === "string"
      ? input
      : input instanceof Request
        ? input.url
        : "";
  const episodeId = url.split("/").pop() ?? "0";

  return await Promise.resolve(
    new Response(
      JSON.stringify({
        id: Number(episodeId),
        name: `Episode ${episodeId}`,
        air_date: "Some Date",
        episode: `S01E${episodeId}`,
        characters: [],
        url,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  );
});

describe("fetchEpisode", () => {
  it("should correctly identify the shared episodes between two characters", async () => {
    const setLoading = jest.fn();
    const setError = jest.fn();
    const setEpisodes = jest.fn();

    await fetchEpisode(charactersState, setLoading, setError, setEpisodes);

    expect(setLoading).toHaveBeenCalledWith(true);
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(setError).toHaveBeenCalledWith(false);

    expect(setEpisodes).toHaveBeenCalledWith(mockResult);
  });
});
