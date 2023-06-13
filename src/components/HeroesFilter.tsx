import { ChangeEvent, useEffect, useState } from "react";
import { IFilterHeroes } from "../models/models";

export const HeroesFilter = () => {
  const [isClearButton, setIsClearButton] = useState(false);
  const [filter, setFilter] = useState<IFilterHeroes>({
    eye_color: "",
    gender: "",
    height: "",
  });

  useEffect(() => {
    filter.eye_color || filter.gender || filter.height
      ? setIsClearButton(true)
      : setIsClearButton(false);
  }, [filter]);

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) =>
    setFilter((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const clearFilter = () =>
    setFilter({
      eye_color: "",
      gender: "",
      height: "",
    });

  return (
    <div className="border py-2 px-4 mb-2">
      <span className="font-bold mr-2">Filter</span>

      <select
        name="eye_color"
        className="border py-1.5 px-4 mr-2"
        onChange={changeHandler}
        value={filter.eye_color}
      >
        <option value="" disabled>
          Eye color
        </option>
        {["Test", "Test", "Test"].map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <select
        name="gender"
        className="border py-1.5 px-4 mr-2"
        onChange={changeHandler}
        value={filter.gender}
      >
        <option value="" disabled>
          Gender
        </option>
        {["Test", "Test", "Test"].map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <select
        name="height"
        className="border py-1.5 px-4 mr-4"
        onChange={changeHandler}
        value={filter.height}
      >
        <option value="" disabled>
          Height
        </option>
        {["Test", "Test", "Test"].map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      {isClearButton && (
        <button
          onClick={clearFilter}
          className="py-1 px-4 bg-red-700 text-white rounded "
        >
          &times;
        </button>
      )}
    </div>
  );
};
