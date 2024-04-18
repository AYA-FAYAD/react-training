import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUser";
import { addUser } from "../thunks/addUsers";
import { removeUser } from "../thunks/removeUser";

interface User {
  id: number;
  name: string;
}

interface UserState {
  data: User[];
  isLoading: boolean;
  error: string | null;
}
const initialState: UserState = {
  data: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? null;
    });

    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? null;
    });

    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export const usersReducer = usersSlice.reducer;
