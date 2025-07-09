import { createSlice } from "@reduxjs/toolkit";
import { books } from "../../data/books";

const initialState = {
  allbooks: books,
  filteredbooks: books,
  searchQuery: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    filteredbooks: (state, action) => {
      state.filteredbooks = state.allbooks.filter((book) => {
        return book.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      state.searchQuery = action.payload;
    },
    addBook: (state, action) => {
      state.allbooks = [action.payload, ...state.allbooks];
      state.filteredbooks = [action.payload, ...state.filteredbooks];
    },
  },
});

export const { filteredbooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
