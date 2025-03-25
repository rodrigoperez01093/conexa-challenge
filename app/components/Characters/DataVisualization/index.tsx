"use client";
import React, { useEffect, useState } from "react";
import "aframe";
import { ForceGraph3D } from "react-force-graph";

const Graph = () => {
  const charactersData = [
    {
      id: 1,
      name: "Rick Sanchez",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
    },
    {
      id: 2,
      name: "Morty Smith",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
      ],
    },
  ];

  const episodesData = [
    { id: 1, name: "Pilot" },
    { id: 2, name: "Lawn Mower Dog" },
    { id: 3, name: "Rick Potion No. 9" },
  ];
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  useEffect(() => {
    const nodes: any = [];
    const links: any = [];

    // Agregar nodos de personajes
    charactersData.forEach((character, index) => {
      nodes.push({
        id: `character-${character.id}`,
        name: character.name,
        group: 1, // Grupo para personajes
      });

      // Relacionar personajes con episodios
      character.episode.forEach((episodeUrl) => {
        // const episodeId = episodeUrl.split("/").pop(); // Extraer id del episodio
        const episodeId = parseInt(episodeUrl.split("/").pop() ?? "");

        // Verificar si el nodo del episodio ya está creado
        if (!nodes.some((node: any) => node.id === `episode-${episodeId}`)) {
          // Agregar nodo de episodio
          const episode = episodesData.find((ep: any) => ep.id === episodeId);
          if (episode) {
            nodes.push({
              id: `episode-${episode.id}`,
              name: episode.name,
              group: 2, // Grupo para episodios
            });
          }
        }

        // Crear un enlace entre el personaje y el episodio
        links.push({
          source: `character-${character.id}`,
          target: `episode-${episodeId}`,
        });
      });
    });

    setGraphData({ nodes, links });
  }, []);
  console.log("DATA", graphData);
  return (
    <div className="w-full">
      <ForceGraph3D
        graphData={graphData}
        nodeAutoColorBy="group"
        nodeLabel="name"
        linkCurvature={0.2}
        linkWidth={2}
        width={window.innerWidth}
        height={500}
      />
    </div>
  );
};

export default Graph;
