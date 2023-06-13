import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHero } from "../../models/models";

interface HeroState {
  loading: boolean;
  error: string;
  count: number;
  heros: IHero[];
}

const initialState: HeroState = {
  loading: false,
  error: "",
  count: 0,
  heros: [],
};

interface IHeroPayload {
  heros: IHero[];
  count: number;
}

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IHeroPayload>) {
      state.loading = false;
      state.heros = action.payload.heros;
      state.count = action.payload.count;
      state.error = "";
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default heroSlice.reducer;
