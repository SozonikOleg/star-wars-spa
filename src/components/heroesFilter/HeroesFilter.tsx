import { ChangeEvent, useEffect, useState } from "react";
import { IFilterHeroes } from "../../models/models";
import { filterData } from "./initialFilterData";
import { useAppDispatch } from "../../hook/redux";
import { heroSlice } from "../../store/slices/heroSlice";

export const HeroesFilter = () => {
  const dispatch = useAppDispatch();
  const [isClearButton, setIsClearButton] = useState(false);
  const [filter, setFilter] = useState<IFilterHeroes>({
    eye_color: "",
    gender: "",
    height: "",
  });

  const { heightList, genderList, eyeList } = filterData;

  useEffect(() => {
    filter.eye_color || filter.gender || filter.height
      ? setIsClearButton(true)
      : setIsClearButton(false);

    dispatch(heroSlice.actions.filter(filter));
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
    <div className="border py-2 px-4 mb-2 bg-blue-50 border rounded">
      <span className="font-bold mr-2 text-blue-400">Filter</span>

      <select
        name="eye_color"
        className="border rounded py-1.5 px-4 mr-2"
        onChange={changeHandler}
        value={filter.eye_color}
      >
        <option value="" disabled>
          Eye color
        </option>
        {eyeList.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <select
        name="gender"
        className="border rounded py-1.5 px-4 mr-2"
        onChange={changeHandler}
        value={filter.gender}
      >
        <option value="" disabled>
          Gender
        </option>
        {genderList.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <select
        name="height"
        className="border rounded py-1.5 px-4 mr-4"
        onChange={changeHandler}
        value={filter.height}
      >
        <option value="" disabled>
          Height
        </option>
        {heightList.map((t) => (
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
