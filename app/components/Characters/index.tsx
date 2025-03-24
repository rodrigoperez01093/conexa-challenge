import React from "react";
import PageLayout from "../Common/Layouts/PageLayout";
import CharactersContainer from "./CharactersContainer";
import EpisodesContainer from "./EpisodesContainer";
import Image from "next/image";
import logo from "../../../public/logo.png";

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
