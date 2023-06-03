import { AppDispatch } from "./../index";
import axios from "../../axios";
import { IHero, ServerResponse } from "../../models/models";
import { heroSlice } from "../slices/heroSlice";

export const fetchHeros = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(heroSlice.actions.fetching());
      const response = await axios.get<ServerResponse<IHero>>("people/");
      dispatch(heroSlice.actions.fetchSuccess(response.data.results));
    } catch (e) {
      dispatch(heroSlice.actions.fetchError(e as Error));
    }
  };
};
