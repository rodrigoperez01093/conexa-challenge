"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { fetchCharacters } from "./Functions/fetchCharacters";
import { type filtersProps } from "@/interfaces/interfaces";
import filtersInitialState from "./Filters/Resources/filtersInitialState.json";
import Filters from "./Filters";
import CharacterCardsContainer from "./CharacterCardsContainer";
import { Pagination } from "@mui/material";
import LoadAndDisplaySection from "@/app/components/Common/Layouts/LoadAndDisplaySection";

const CharactersSection = ({ characterSectionId }: any) => {
  const [filters, setFilters] = useState<filtersProps>({
    ...filtersInitialState,
  });
  const [paging, setPaging] = useState({
    page: 1,
  });
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    fetchCharacters(filters, paging, setData, setLoading, setError);
  }, [filters, paging]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePageChange = useCallback(
    (e: React.ChangeEvent<unknown>, value: number) => {
      setPaging((prev) => ({ ...prev, page: value }));
    },
    []
  );

  const memoizedFilters = useMemo(() => filters, [filters]);
  const memoizedPaging = useMemo(() => paging, [paging]);

  return (
    <div className="w-full lg:w-1/2 h-full lg:first:mr-2 lg:last:ml-2 mt-4 lg:mt-2 shadow-lg border border-primary rounded-lg px-2 py-2">
      <div className="w-full flex flex-col items-center font-semibold">
        <span>Select character #{characterSectionId + 1}</span>
      </div>
      <Filters
        filters={memoizedFilters}
        setFilters={setFilters}
        setPaging={setPaging}
      />
      <div className="h-[300px]">
        <LoadAndDisplaySection loading={loading} error={error}>
          <CharacterCardsContainer
            characters={data?.results}
            characterSectionId={characterSectionId}
          />
        </LoadAndDisplaySection>
      </div>
      <div className="w-full flex items-center justify-center mt-2 scale-75 lg:scale-100">
        <Pagination
          count={data?.info?.pages}
          page={memoizedPaging.page}
          color="primary"
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#000",
              "&.Mui-selected": {
                backgroundColor: "#08D09D",
                color: "white",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CharactersSection;
