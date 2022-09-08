import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("darkMode")
    ? localStorage.getItem("darkMode")
    : "light",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    switchDarkMode: (state) => {
      state.darkMode = state.darkMode === "dark" ? "light" : "dark";
      localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const configState = (state) => state.configReducer;
export const { switchDarkMode } = configSlice.actions;
export default configSlice.reducer;
