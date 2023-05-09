import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { vacancyAPI } from "../api/api";

// THUNKS
export const vacancyTC = createAsyncThunk(
  "vacancy",
  async (params: any, { dispatch }) => {
    try {
      const res = await vacancyAPI.getVacancy(params);

      dispatch(setVacancy(res.data));
    } catch (err) {
      console.log(err);
    }
  },
);

const slice = createSlice({
  name: "vacancy",
  initialState: {
    searchParams: {},
    vacancies: [
      {
        id: 1,
        currency: "",
        payment_from: 1,
        payment_to: 1,
        town: { title: "" },
        type_of_work: { title: "" },
      },
    ],
  },
  reducers: {
    setVacancy(state, action: PayloadAction<any>) {
      state.vacancies = action.payload.objects;
    },
    setPackParams(state, action: PayloadAction<any>) {
      state.searchParams = action.payload;
    },
  },
});

export const vacanciesReducer = slice.reducer;

export const { setVacancy, setPackParams } = slice.actions;
