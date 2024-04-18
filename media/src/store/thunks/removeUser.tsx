import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("user/removr", async (user: any) => {
  const response = await axios.delete(`http://localhost:3000/users/${user.id}`);

  return response.data;
});

export { removeUser };
