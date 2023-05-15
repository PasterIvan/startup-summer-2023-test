import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { vacancyAPI } from "../api/api";
import { requestStatus } from "../enums/requestStatus";

import { setAppStatus } from "./appReducer";

// THUNKS
export const vacancyTC = createAsyncThunk(
  "vacancy",
  async (params: any, { dispatch }) => {
    dispatch(setAppStatus(requestStatus.LOADING));

    try {
      const res = await vacancyAPI.getVacancy(params);

      dispatch(setVacancy(res.data));
      dispatch(setAppStatus(requestStatus.SUCCEEDED));
    } catch (err) {
      console.log(err);
      dispatch(setAppStatus(requestStatus.FAILED));
    }
  },
);

const slice = createSlice({
  name: "vacancy",
  initialState: {
    vacancies: [] as VacancyType[],
    total: 1,
  },
  reducers: {
    setVacancy(
      state,
      action: PayloadAction<{ total: number; objects: VacancyType[] }>,
    ) {
      state.vacancies = action.payload.objects;
      state.total = action.payload.total < 500 ? action.payload.total / 4 : 125;
    },
  },
});

export const vacanciesReducer = slice.reducer;

export const { setVacancy } = slice.actions;

export type VacancyType = {
  id: number;
  id_client: number;
  payment_from: number;
  payment_to: number;
  date_pub_to: number;
  date_archived: number;
  date_published: number;
  address: string;
  payment: string;
  profession: string;
  work: string;
  metro: {
    id: number;
    title: string;
    id_metro_line: number;
  }[];
  currency: string;
  moveable: boolean;
  agreement: boolean;
  anonymous: boolean;
  type_of_work: {
    id: number;
    title: string;
  };
  place_of_work: {
    id: number;
    title: string;
  };
  education: {
    id: number;
    title: string;
  };
  experience: {
    id: number;
    title: string;
  };
  maritalstatus: {
    id: number;
    title: string;
  };
  children: {
    id: number;
    title: string;
  };
  already_sent_on_vacancy: boolean;
  languages: [];
  driving_licence: [];
  catalogues: {
    id: number;
    title: string;
    positions: { id: number; title: string }[];
  }[];
  agency: {
    id: number;
    title: string;
  };
  town: {
    id: number;
    title: string;
    declension: string;
    genitive: string;
  };
  client_logo: string;
  age_from: number;
  age_to: number;
  gender: {
    id: number;
    title: string;
  };
  firm_name: string;
  firm_activity: string;
  link: string;
};
