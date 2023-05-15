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

      dispatch(setVacancies(res.data));
      dispatch(setAppStatus(requestStatus.SUCCEEDED));
    } catch (err) {
      console.log(err);
      dispatch(setAppStatus(requestStatus.FAILED));
    }
  },
);
export const vacancyByIdTC = createAsyncThunk(
  "vacancy",
  async (id: number, { dispatch }) => {
    dispatch(setAppStatus(requestStatus.LOADING));

    try {
      const res = await vacancyAPI.getVacancyById(id);

      dispatch(setVacancyById(res.data));
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
    vacancy: {
      id: 1,
      id_client: 1,
      payment_from: 1,
      payment_to: 1,
      date_pub_to: 1,
      date_archived: 1,
      date_published: 1,
      address: "",
      payment: "",
      profession: "",
      work: "",
      metro: [
        {
          id: 1,
          title: "",
          id_metro_line: 1,
        },
      ],
      currency: "",
      moveable: false,
      agreement: false,
      anonymous: false,
      type_of_work: {
        id: 1,
        title: "",
      },
      place_of_work: {
        id: 1,
        title: "",
      },
      education: {
        id: 1,
        title: "",
      },
      experience: {
        id: 1,
        title: "",
      },
      maritalstatus: {
        id: 1,
        title: "",
      },
      children: {
        id: 1,
        title: "",
      },
      already_sent_on_vacancy: false,
      languages: [],
      driving_licence: [],
      catalogues: [
        {
          id: 1,
          title: "",
          positions: [{ id: 1, title: "" }],
        },
      ],
      agency: {
        id: 1,
        title: "",
      },
      town: {
        id: 1,
        title: "",
        declension: "",
        genitive: "",
      },
      client_logo: "",
      age_from: 1,
      age_to: 1,
      gender: {
        id: 1,
        title: "",
      },
      firm_name: "",
      firm_activity: "",
      link: "",
      vacancyRichText: "",
    } as VacancyType,
    total: 1,
  },
  reducers: {
    setVacancies(
      state,
      action: PayloadAction<{ total: number; objects: VacancyType[] }>,
    ) {
      state.vacancies = action.payload.objects;
      state.total = action.payload.total < 500 ? action.payload.total / 4 : 125;
    },
    setVacancyById(state, action: PayloadAction<VacancyType>) {
      state.vacancy = action.payload;
    },
  },
});

export const vacanciesReducer = slice.reducer;

export const { setVacancies, setVacancyById } = slice.actions;

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
  vacancyRichText: string;
};
