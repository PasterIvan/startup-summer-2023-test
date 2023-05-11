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
    vacancies: [
      {
        id: 1,
        currency: "",
        payment_from: 1,
        payment_to: 1,
        agreement: 0,
        town: { title: "" },
        type_of_work: { title: "" },
      },
    ],
    total: 1,
  },
  reducers: {
    setVacancy(state, action: PayloadAction<any>) {
      state.vacancies = action.payload.objects;
      state.total = action.payload.total < 500 ? action.payload.total / 4 : 125;
    },
  },
});

export const vacanciesReducer = slice.reducer;

export const { setVacancy } = slice.actions;
