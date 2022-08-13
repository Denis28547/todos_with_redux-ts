import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { userType } from "./user.types";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",

  async function (_, thunkAPI) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Loading in fetching users");
    }
  }
);

type initialStateProps = {
  users: userType[];
  loading: boolean;
  error: any;
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
    builder.addCase(fetchUsers.pending.type, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchUsers.fulfilled.type,
      (state, action: PayloadAction<userType[]>) => {
        state.loading = false;
        state.users = action.payload;
      }
    );

    builder.addCase(
      fetchUsers.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
