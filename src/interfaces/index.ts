export type IconName =
  | "icon-add"
  | "icon-save"
  | "icon-close"
  | "icon-edit"
  | "icon-archive"
  | "icon-unarchive"
  | "icon-delete"
  | "icon-task"
  | "icon-idea"
  | "icon-quote"
  | "icon-random";

export interface Category {
  id: string;
  name: string;
  icon: IconName;
}

export interface CategoryWithStats extends Category {
  active: number;
  archived: number;
}

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
