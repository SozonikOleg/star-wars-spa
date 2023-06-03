import { useNavigate } from "react-router-dom";
import { IHero } from "../models/models";

interface HeroCardProps {
  hero: IHero;
}

// birth_year: "57BBY";
// created: "2014-12-10T16:16:29.192000Z";
// edited: "2014-12-20T21:17:50.325000Z";
// eye_color: "blue-gray";
// films: (6)[
//   ("https://swapi.dev/api/films/1/",
//   "https://swapi.dev/api/films/2/",
//   "https://swapi.dev/api/films/3/",
//   "https://swapi.dev/api/films/4/",
//   "https://swapi.dev/api/films/5/",
//   "https://swapi.dev/api/films/6/")
// ];
// gender: "male";
// hair_color: "auburn, white";
// height: "182";
// homeworld: "https://swapi.dev/api/planets/20/";
// mass: "77";
// name: "Obi-Wan Kenobi";
// skin_color: "fair";

export const HeroCard = ({ hero }: HeroCardProps) => {
  const navigate = useNavigate();

  const handleCard = () => navigate(`/hero/${hero.name}`);

  return (
    <div
      onClick={handleCard}
      className=" border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer "
    >
      <p className="text-lg font-bold"> {hero?.name}</p>
      <p className=""> {hero.name}</p>
      <p className=""> {hero.id}</p>
      <p className=""> {hero.birth_year}</p>
      <p className=""> {hero.eye_color}</p>
      <p className=""> {hero.gender}</p>
    </div>
  );
};
