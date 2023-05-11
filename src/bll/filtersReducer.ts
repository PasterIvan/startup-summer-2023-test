import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { vacancyAPI } from "../api/api";
import { SearchParamsType } from "../utils/getActualParams";

// THUNKS
export const cataloguesTC = createAsyncThunk(
  "catalogues",
  async (param, { dispatch }) => {
    try {
      const res = await vacancyAPI.getCatalogues();

      dispatch(setCatalogues(res.data));
    } catch (err) {
      console.log(err);
    }
  },
);

const slice = createSlice({
  name: "filters",
  initialState: {
    paramsState: {
      page: undefined,
      count: "4",
      keyword: undefined,
      catalogues: undefined,
      payment_from: undefined,
      payment_to: undefined,
      published: "1",
    } as SearchParamsType,
    filters: [
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
      state.filters = action.payload;
    },
    setParamsState(state, action) {
      state.paramsState = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;

export const { setCatalogues, setParamsState } = slice.actions;
