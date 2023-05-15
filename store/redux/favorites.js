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
    addFavorite: (state) => {},
  },
});
