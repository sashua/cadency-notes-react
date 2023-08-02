import { Category, Note } from "../interfaces";

export const getDates = (text: string): string[] => {
  const matches = text.matchAll(/\d{1,2}\/\d{1,2}\/\d{2,4}/g);
  return Array.from(matches).map(([date]) => date);
};

export const formatDate = (timestamp: number): string =>
  new Date(timestamp).toLocaleDateString("en-US", {
    dateStyle: "medium",
  });

export const countNotes = (notes: Note[]) => {
  return notes.reduce((acc, { categoryId, archived }) => {
    if (!acc[categoryId]) {
      acc[categoryId] = { active: 0, archived: 0 };
    }
    acc[categoryId][archived ? "archived" : "active"] += 1;
    return acc;
  }, {} as Record<Category["id"], { active: number; archived: number }>);
};
