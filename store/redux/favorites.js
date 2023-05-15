// NOTE you COULD manage all state within the store but here is an example of managing redux within multiple files
// NOTE this is a 'slice'
import { createSlice } from "@reduxjs/toolkit";
// NOTE each slice has these components: name, initialState, and reducer
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    // NOTE state is a given param when using redux
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
