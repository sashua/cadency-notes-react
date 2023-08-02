import { Category } from ".";

export interface Note {
  id: string;
  categoryId: string;
  name: string;
  content: string;
  archived: boolean;
  createdAt: number;
}

export type CreateNote = Omit<Note, "id" | "archived" | "createdAt">;
export type EditNote = CreateNote;

export interface NoteWithCategory extends Note {
  category?: Category;
}
