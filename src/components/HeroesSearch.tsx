import { ServerResponse } from "http";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "../axios";
import { useAppDispatch } from "../hook/redux";
import { useDebounce } from "../hook/useDebounce";
import { IHero } from "../models/models";
import { searchHeroes } from "../store/actions/heroActions";

export const HeroesSearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const debounce = useDebounce(value);

  useEffect(() => {
    if (debounce.length > 0) {
      dispatch(searchHeroes(debounce));
    }
  }, [debounce]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="border rounded py-2 px-2 mb-4 bg-blue-50">
      <input
        type="text"
        className="border rounded py-2 px-4 mb-4 outline-0 w-full text-blue-400"
        placeholder="Type something here..."
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};
