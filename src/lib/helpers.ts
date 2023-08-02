export const getDates = (text: string): string[] => {
  const matches = text.matchAll(/\d{1,2}\/\d{1,2}\/\d{2,4}/g);
  return Array.from(matches).map(([date]) => date);
};

export const formatDate = (timestamp: number): string =>
  new Date(timestamp).toLocaleDateString("en-US", {
    dateStyle: "medium",
  });
