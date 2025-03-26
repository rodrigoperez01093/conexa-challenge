"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import LoadAndDisplaySection from "../../Common/Layouts/LoadAndDisplaySection";
import { fetchEpisode } from "./Functions/fetchEpisode";
import EpisodeSection from "./EpisodeSection";
import { type Episode } from "@/interfaces/interfaces";
import dynamic from "next/dynamic";
import ModalBackground from "../../Common/Modals/ModalBackground";
import { Button } from "@mui/material";
import "aframe";

const DataVisualization = dynamic(
  async () => await import("../DataVisualization/"),
  { ssr: false }
);
interface EpisodeProps {
  firstCharacter: Episode[];
  sharedEpisodes: Episode[];
  secondCharacter: Episode[];
}

const EpisodesContainer = () => {
  const [error, setError] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [episodes, setEpisodes] = useState<EpisodeProps>({
    firstCharacter: [],
    sharedEpisodes: [],
    secondCharacter: [],
  });
  const [showGraph, setShowGaph] = useState(false);
  const charactersState = useAppSelector(
    (state) => state.characters.charactersSelected
  );

  useEffect(() => {
    const hasUndefinedCharacter = charactersState.some(
      (section: any) => section.character === undefined
    );

    if (hasUndefinedCharacter) {
      setError(true);
      return;
    }
    fetchEpisode(charactersState, setLoading, setError, setEpisodes);
  }, [charactersState]);

  return (
    <div className="w-full border rounded-lg border-primary shadow-lg h-full lg:h-[350px] mt-2 px-2 py-2 mb-10 overflow-hidden">
      <LoadAndDisplaySection
        loading={loading}
        error={error}
        loadingMessage={"Searching episodes..."}
        errorMessage="Please select both characters to see episodes"
      >
        <div className="w-full h-[50px] flex items-center justify-center">
          <Button
            variant="contained"
            onClick={() => {
              setShowGaph(true);
            }}
            sx={{
              backgroundColor: "#08D09D",
              color: "white",
              "&:hover": {
                backgroundColor: "#06b388",
              },
            }}
          >
            Graph visualization
          </Button>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row items-start justify-between">
          <EpisodeSection
            episodes={episodes.firstCharacter}
            title={`${charactersState[0].character?.name} episodes`}
            section={1}
          />
          <EpisodeSection
            episodes={episodes.sharedEpisodes}
            title="Shared episodes"
          />
          <EpisodeSection
            episodes={episodes.secondCharacter}
            title={`${charactersState[1].character?.name} episodes`}
            section={2}
          />
        </div>
        {showGraph && (
          <ModalBackground
            closer={() => {
              setShowGaph(false);
            }}
          >
            <DataVisualization
              characters={charactersState}
              episodes={episodes.firstCharacter.concat(
                episodes.secondCharacter
              )}
            />
          </ModalBackground>
        )}
      </LoadAndDisplaySection>
    </div>
  );
};

export default EpisodesContainer;
