import { RootState } from ".";
import { NoteWithCategory } from "../interfaces";

export const selectCategories = (state: RootState) => state.notes.categories;

export const selectActiveNotes = (state: RootState) =>
  state.notes.items.reduce((acc, note) => {
    if (!note.archived) {
      const category = state.notes.categories.find((cat) => cat.id === note.id);
      acc.push({ ...note, category });
    }
    return acc;
  }, [] as NoteWithCategory[]);

export const selectArchivedNotes = (state: RootState) =>
  state.notes.items.reduce((acc, note) => {
    if (note.archived) {
      const category = state.notes.categories.find((cat) => cat.id === note.id);
      acc.push({ ...note, category });
    }
    return acc;
  }, [] as NoteWithCategory[]);

export const selectEditingNote = (state: RootState) =>
  state.notes.items.find((note) => note.id === state.notes.editingNoteId);

export const selectArchiveOpened = (state: RootState) =>
  state.notes.archiveOpened;

export const selectEditorOpened = (state: RootState) =>
  state.notes.editorOpened;
