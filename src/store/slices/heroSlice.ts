import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHero } from "../../models/models";

interface HeroState {
  loading: boolean;
  error: string;
  heros: IHero[];
}

const initialState: HeroState = {
  loading: false,
  error: "",
  heros: [],
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IHero[]>) {
      state.loading = false;
      state.heros = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default heroSlice.reducer;
