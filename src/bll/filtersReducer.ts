import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { vacancyAPI } from "../api/api";

// THUNKS
export const cataloguesTC = createAsyncThunk(
  "catalogues",
  async (params, { dispatch }) => {
    try {
      const res = await vacancyAPI.getСatalogues();

      dispatch(setCatalogues(res.data));
    } catch (err) {
      console.log(err);
    }
  },
);

const slice = createSlice({
  name: "filters",
  initialState: {
    catalogues: [
      {
        title_rus: "",
        url_rus: "",
        title: "",
        title_trimmed: "",
        key: 1,
        positions: [
          {
            title_rus: "",
            url_rus: "",
            title: "",
            id_parent: 1,
            key: 1,
          },
        ],
      },
    ],
  },
  reducers: {
    setCatalogues(state, action) {
      state.catalogues = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;

export const { setCatalogues } = slice.actions;
