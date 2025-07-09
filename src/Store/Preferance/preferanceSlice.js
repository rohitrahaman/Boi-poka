import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelOpen: "closed",
};

export const preferanceSlice = createSlice({
  name: "preferance",
  initialState,
  reducers: {
    toggleModel: (state) => {
      state.modelOpen = state.modelOpen === "closed" ? "open" : "closed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModel } = preferanceSlice.actions;

export default preferanceSlice.reducer;
