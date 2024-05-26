import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getData = createAsyncThunk("/getData", async () => {
  try {
    console.log(process.env.REACT_APP_API_URL);
    const res = await fetch(process.env.REACT_APP_API_URL);
    if (!res.ok) {
      throw new Error("Something went wrong, try again !");
    }
    const response = await res.json();
    return response;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
});

export const movieSlice = createSlice({
  name: "/movieSlie",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
