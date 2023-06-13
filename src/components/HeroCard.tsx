import { useNavigate } from "react-router-dom";
import { IHero } from "../models/models";

interface HeroCardProps {
  hero: IHero;
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  const navigate = useNavigate();

  const handleCard = () => navigate(`/hero/${hero.name}`, { state: { hero } });

  return (
    <div
      onClick={handleCard}
      className=" border rounded py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer text-blue-400  bg-blue-50"
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
