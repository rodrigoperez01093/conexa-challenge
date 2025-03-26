import React from "react";
import PageLayout from "../Common/Layouts/PageLayout";
import CharactersContainer from "./CharactersContainer";
import Image from "next/image";
import logo from "../../../public/logo.png";
import dynamic from "next/dynamic";

const EpisodesContainer = dynamic(
  async () => await import("./EpisodesContainer/"),
  { ssr: false }
);

const CharactersView = () => {
  return (
    <PageLayout width="w-[95%] lg:w-[80%]">
      <div className="w-full flex flex-col items-center mt-4">
        <Image src={logo} width={200} height={100} alt="logo" />
      </div>
      <CharactersContainer />
      <EpisodesContainer />
    </PageLayout>
  );
};

export default CharactersView;
