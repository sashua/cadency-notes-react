export interface Note {
  id: string;
  categoryId: string;
  name: string;
  content: string;
  archived: boolean;
  createdAt: number;
}
