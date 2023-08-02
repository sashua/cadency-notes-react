import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { categories, notes } from "../data";
import { Category, CreateNote, EditNote, Note } from "../interfaces";

interface NotesState {
  categories: Category[];
  items: Note[];
  editingNoteId: Note["id"] | null;
  editorOpened: boolean;
  archiveOpened: boolean;
}

const initialState: NotesState = {
  categories,
  items: notes,
  editingNoteId: null,
  editorOpened: false,
  archiveOpened: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action: PayloadAction<CreateNote>) {
      state.items.push({
        ...action.payload,
        id: nanoid(),
        archived: false,
        createdAt: Date.now(),
      });
      state.editingNoteId = null;
      state.editorOpened = false;
    },

    editNote(state, action: PayloadAction<EditNote>) {
      const index = state.items.findIndex(
        (note) => note.id === state.editingNoteId
      );
      state.items[index] = { ...state.items[index], ...action.payload };
      state.editingNoteId = null;
      state.editorOpened = false;
    },

    archiveNote(state, action: PayloadAction<Note["id"]>) {
      const note = state.items.find((note) => note.id === action.payload);
      if (note) note.archived = true;
    },

    unarchiveNote(state, action: PayloadAction<Note["id"]>) {
      const note = state.items.find((note) => note.id === action.payload);
      if (note) note.archived = false;
    },

    deleteNote(state, action: PayloadAction<Note["id"]>) {
      const index = state.items.findIndex((note) => note.id === action.payload);
      state.items.splice(index, 1);
    },

    archiveAllNotes(state) {
      state.items.forEach((note) => (note.archived = true));
    },

    unarchiveAllNotes(state) {
      state.items.forEach((note) => (note.archived = false));
    },

    deletaAllActiveNotes(state) {
      state.items = state.items.filter((note) => note.archived === true);
    },

    deleteAllArchivedNotes(state) {
      state.items = state.items.filter((note) => note.archived === false);
    },

    openEditor(state, action: PayloadAction<Note["id"] | undefined>) {
      state.editorOpened = true;
      state.editingNoteId = action.payload ?? null;
    },

    closeEditor(state) {
      state.editorOpened = false;
      state.editingNoteId = null;
    },

    openArchive(state) {
      state.archiveOpened = true;
    },

    closeArchive(state) {
      state.archiveOpened = false;
    },
  },
});

export const {
  createNote,
  editNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
  archiveAllNotes,
  unarchiveAllNotes,
  deletaAllActiveNotes,
  deleteAllArchivedNotes,
  openEditor,
  closeEditor,
  openArchive,
  closeArchive,
} = notesSlice.actions;
export default notesSlice.reducer;
