import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableProps } from "../components/Table";
import { formatDate, getDates } from "../lib/helpers";
import {
  deleteAllArchivedNotes,
  deleteNote,
  selectArchivedNotes,
  unarchiveAllNotes,
  unarchiveNote,
} from "../redux";

const titles = ["Name", "Created", "Category", "Content", "Dates"];

export function useArchiveTable(): TableProps {
  const dispatch = useDispatch();
  const notes = useSelector(selectArchivedNotes);

  const headProps: TableProps["headProps"] = useMemo(
    () => ({
      data: titles,
      actions: [
        {
          icon: "icon-unarchive",
          onClick: () => {
            dispatch(unarchiveAllNotes());
          },
        },
        {
          icon: "icon-delete",
          onClick: () => {
            dispatch(deleteAllArchivedNotes());
          },
        },
      ],
    }),
    [dispatch]
  );

  const rowsProps: TableProps["rowsProps"] = useMemo(
    () =>
      notes.map(({ id, name, category, content, createdAt }) => {
        return {
          icon: category?.icon,
          data: [
            name,
            formatDate(createdAt),
            category?.name,
            content,
            getDates(content).join(", "),
          ],
          actions: [
            {
              icon: "icon-unarchive",
              onClick: () => dispatch(unarchiveNote(id)),
            },
            {
              icon: "icon-delete",
              onClick: () => dispatch(deleteNote(id)),
            },
          ],
        };
      }),
    [dispatch, notes]
  );

  return { headProps, rowsProps };
}
