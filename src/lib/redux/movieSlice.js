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
    favouriteMovieList:[],
    loading: false,
    error: null,
    isAdded:false
  },
  reducers: {
    addFavouriteMovie:(state,action)=>{
      const isMovie = state.data.filter(item=>item.id===action.payload);
      const currentMovie = isMovie[0];
      if(currentMovie){
        const isAlreadyPresent = state.favouriteMovieList.some(item=>item.id===action.payload);
        if(!isAlreadyPresent){
          state.favouriteMovieList.push(currentMovie)
          toast.success("Added to Favourite")
          state.isAdded = true
        }else{
          return alert('Movie already added.')
        }
      }else{
         toast.error('Movie not found')
         
      }
      
    },
    removeFavouriteMovie:(state,action)=>{
       state.favouriteMovieList = state.favouriteMovieList.filter(item=>item.id !== action.payload);
       toast.error('Remove from Favourite')
    }
  },
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
export const {addFavouriteMovie,removeFavouriteMovie} = movieSlice.actions;

