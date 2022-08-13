import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { userType } from "./user.types";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",

  async function () {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

type initialStateProps = {
  users: userType[];
  loading: boolean;
  error: null | Error;
};

const initialState: initialStateProps = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {});
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
