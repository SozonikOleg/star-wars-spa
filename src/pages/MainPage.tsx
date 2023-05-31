import React from "react";
import { HeroCard } from "../components/HeroCard";
import { HeroSearch } from "../components/HeroSearch";

export const MainPage = () => {
  return (
    <div className="container mx-auto max-w-[760px] pt-5">
      <HeroSearch />
      <HeroCard />
      MainPage
    </div>
  );
};
