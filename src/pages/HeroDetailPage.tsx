import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

export const HeroDetailPage = () => {
  const params = useParams<"id">();

  const location = useLocation();
  const hero = location?.state?.hero;

  console.log("hero", hero);

  return (
    <div className="container mx-auto pt-5 max-w-[760px] text-blue-400">
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">{`name: ${hero.name}`}</p>
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">
        {`hair_color: ${hero.hair_color}`}
      </p>
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">
        {`birth_year: ${hero.birth_year}`}
      </p>
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">{`eye_color: ${hero.eye_color}`}</p>
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">
        {`gender: ${hero.gender}`}
      </p>
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">{`height: ${hero.height}`}</p>
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">{`mass: ${hero.mass}`}</p>
      <p className="border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">{`skin_color: ${hero.skin_color}`}</p>
    </div>
  );
};
