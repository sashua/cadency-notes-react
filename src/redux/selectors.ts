import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";
import { CategoryWithStats, NoteWithCategory } from "../interfaces";
import { countNotes } from "../lib/helpers";

export const selectCategories = (state: RootState) => state.notes.categories;

export const selectNotes = (state: RootState) => state.notes.items;

const selectPopulatesNotes = createSelector(
  selectNotes,
  selectCategories,
  (notes, categories) =>
    notes.map<NoteWithCategory>((note) => {
      const category = categories.find((cat) => cat.id === note.categoryId);
      return { ...note, category };
    })
);

export const selectCategoriesWithStats = createSelector(
  selectCategories,
  selectNotes,
  (categories, notes) => {
    const notesCount = countNotes(notes);
    return categories.map((category) => {
      const { active, archived } = notesCount[category.id] ?? {};
      return { ...category, active, archived } as CategoryWithStats;
    });
  }
);

export const selectActiveNotes = createSelector(selectPopulatesNotes, (notes) =>
  notes.filter((note) => !note.archived)
);

export const selectArchivedNotes = createSelector(
  selectPopulatesNotes,
  (notes) => notes.filter((note) => note.archived)
);

export const selectEditingNote = createSelector(
  selectNotes,
  (state: RootState) => state.notes.editingNoteId,
  (notes, noteId) => notes.find((note) => note.id === noteId)
);

export const selectArchiveOpened = (state: RootState) =>
  state.notes.archiveOpened;

export const selectEditorOpened = (state: RootState) =>
  state.notes.editorOpened;
