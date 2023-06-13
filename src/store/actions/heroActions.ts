import { AppDispatch } from "./../index";
import axios from "../../axios";
import { IHero, ServerResponse } from "../../models/models";
import { heroSlice } from "../slices/heroSlice";

export const fetchHeroes = (page = 1, count = 10) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(heroSlice.actions.fetching());
      const response = await axios.get<ServerResponse<IHero>>("people/", {
        params: { page, count },
      });
      dispatch(
        heroSlice.actions.fetchSuccess({
          heros: response.data.results,
          count: response.data.count,
        })
      );
    } catch (e) {
      dispatch(heroSlice.actions.fetchError(e as Error));
    }
  };
};

export const searchHeroes = (searchValue: string, count = 82) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(heroSlice.actions.fetching());
      const response = await axios.get<ServerResponse<IHero>>("people/", {
        params: { search: searchValue, count },
      });
      dispatch(
        heroSlice.actions.fetchSuccess({
          heros: response.data.results,
          count: response.data.count,
        })
      );
    } catch (e) {
      dispatch(heroSlice.actions.fetchError(e as Error));
    }
  };
};
