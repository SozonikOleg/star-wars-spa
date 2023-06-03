import { useEffect } from "react";
import { HeroCard } from "../components/HeroCard";
import { HeroSearch } from "../components/HeroSearch";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { fetchHeros } from "../store/actions/heroActions";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { error, loading, heros } = useAppSelector((state) => state.hero);

  useEffect(() => {
    dispatch(fetchHeros());
  }, []);

  return (
    <div className="container mx-auto max-w-[760px] pt-5">
      {loading && <p className="text-center text-lg">Loading ...</p>}
      {error && <p className="text-center text-lg text-red-600">{error}</p>}
      {heros?.map((hero) => {
        return <HeroCard key={hero.name} hero={hero} />;
      })}

      <HeroSearch />
    </div>
  );
};
