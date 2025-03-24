import axios from "axios";
import { fetchCharacters } from "./fetchCharacters"; // Adjust the import path as needed
import { endpoints } from "@/config";

jest.mock("axios");
jest.mock("@/config", () => ({
  endpoints: jest.fn(),
}));

describe("fetchCharacters", () => {
  const mockSetData = jest.fn();
  const mockSetLoading = jest.fn();
  const mockSetError = jest.fn();

  const mockFilters = {
    name: "",
    status: "alive",
  };

  const mockPaging = {
    page: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (endpoints as jest.Mock).mockReturnValue(
      "https://rickandmortyapi.com/api/character"
    );
  });

  it("should fetch characters successfully with filters applied", async () => {
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: "Rick Sanchez", status: "Alive" },
          { id: 2, name: "Morty Smith", status: "Alive" },
        ],
        info: { count: 2, pages: 1 },
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    await fetchCharacters(
      mockFilters,
      mockPaging,
      mockSetData,
      mockSetLoading,
      mockSetError
    );

    expect(axios.get).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/?page=1&status=alive"
    );
    expect(mockSetLoading).toHaveBeenCalledTimes(2);
    expect(mockSetLoading).toHaveBeenNthCalledWith(1, true);
    expect(mockSetLoading).toHaveBeenNthCalledWith(2, false);
    expect(mockSetData).toHaveBeenCalledWith(mockResponse.data);
    expect(mockSetError).toHaveBeenCalledWith(false);
  });

  it("should handle empty filters correctly", async () => {
    const emptyFilters = {
      name: "",
      status: "",
    };

    const mockResponse = {
      data: {
        results: [],
        info: { count: 0, pages: 0 },
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    await fetchCharacters(
      emptyFilters,
      mockPaging,
      mockSetData,
      mockSetLoading,
      mockSetError
    );

    expect(axios.get).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
  });
});
