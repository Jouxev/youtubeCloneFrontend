import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
};

export const videoSlice = createSlice({
  name: "videoReducer",
  initialState,
  reducers: {},
});

export default videoSlice.reducer;
