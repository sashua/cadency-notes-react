import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { notes } from "../data";
import { Note } from "../interfaces";

interface NotesSlice {
  notes: Note[];
}

const initialState = { notes } as NotesSlice;

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    create(state, action) {
      state.notes.push({
        ...action.payload,
        id: nanoid(),
        createdAt: Date.now(),
      });
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = notesSlice.actions;
export default notesSlice.reducer;
