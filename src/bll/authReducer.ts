import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { authAPI } from "../api/authApi";

// THUNKS
export const loginTC = createAsyncThunk(
  "auth/login",
  async (params, { dispatch }) => {
    try {
      const res = await authAPI.getToken();

      dispatch(setAuth(res.data));
    } catch (err) {
      console.log(err);
    }
  },
);

const slice = createSlice({
  name: "auth",
  initialState: {
    login: {
      access_token: "",
      refresh_token: "",
      ttl: 1,
      expires_in: 1,
      token_type: "",
      reg_user_resumes_count: 1,
    },
  },
  reducers: {
    setAuth(state, action: PayloadAction<AuthType>) {
      state.login = action.payload;
    },
  },
});

export const authReducer = slice.reducer;

export const { setAuth } = slice.actions;

type AuthType = {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
};
