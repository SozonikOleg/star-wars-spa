import React from "react";
import { useParams } from "react-router";

export const HeroDetailPage = () => {
  const params = useParams<"id">();
  return (
    <div className="container mx-auto pt-5 max-w-[760px]">
      HeroDetailPage
      <p>{params.id}</p>
    </div>
  );
};
