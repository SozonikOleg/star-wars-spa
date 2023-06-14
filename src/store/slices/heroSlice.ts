import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHero, IFilter } from "../../models/models";

interface HeroState {
  loading: boolean;
  error: string;
  count: number;
  heros: IHero[];
  herosContainer: IHero[];
}

const initialState: HeroState = {
  loading: false,
  error: "",
  count: 0,
  heros: [],
  herosContainer: [],
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
      state.herosContainer = action.payload.heros;
      state.count = action.payload.count;
      state.error = "";
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    filter(state, action: PayloadAction<IFilter>) {
      state.heros = state.herosContainer
        .filter((e) => e.eye_color.includes(action.payload.eye_color))
        .filter((g) => g.gender.includes(action.payload.gender))
        .filter((h) => h.height.includes(action.payload.height));
    },
  },
});

export default heroSlice.reducer;
