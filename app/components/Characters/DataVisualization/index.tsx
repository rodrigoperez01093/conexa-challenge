"use client";
import React, { useEffect, useState } from "react";
import { ForceGraph3D } from "react-force-graph";
import "aframe";

const Graph = ({ characters, episodes }: any) => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  useEffect(() => {
    const charactersData = characters.map((char: any) => char.character);
    const nodes: any = [];
    const links: any = [];

    charactersData.forEach((character: any) => {
      nodes.push({
        id: `character-${character.id}`,
        name: `Character: ${character.name} - Status: ${character.status}`,
        group: 1,
      });

      // Relacionar personajes con episodios
      character.episode.forEach((episodeUrl: any) => {
        const episodeId = parseInt(episodeUrl.split("/").pop());

        if (!nodes.some((node: any) => node.id === `episode-${episodeId}`)) {
          const episode = episodes.find((ep: any) => ep.id === episodeId);
          if (episode) {
            nodes.push({
              id: `episode-${episode.id}`,
              name: `Episode: ${episode.episode} - Name: ${episode.name}`,
              group: 2,
            });
          }
        }

        links.push({
          source: `character-${character.id}`,
          target: `episode-${episodeId}`,
        });
      });
    });

    setGraphData({ nodes, links });
  }, []);

  return (
    <div
      className="w-[80%] h-[500px] border border-primary shadow-lg rounded-lg"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ForceGraph3D
        graphData={graphData}
        nodeAutoColorBy="group"
        nodeLabel="name"
        linkCurvature={0}
        linkWidth={2}
        width={window.innerWidth * 0.8}
        height={500}
        nodeColor={(node: any) => {
          if (node.group === 1) {
            if (node.name.includes("Alive")) return "#08D09D";
            return "#FF5733";
          }
          if (node.group === 2) return "#EDF037";
          return "#888";
        }}
      />
    </div>
  );
};

export default Graph;
