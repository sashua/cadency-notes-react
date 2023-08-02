import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableProps } from "../components/Table";
import { formatDate, getDates } from "../lib/helpers";
import {
  archiveAllNotes,
  archiveNote,
  deletaAllActiveNotes,
  deleteNote,
  openEditor,
  selectActiveNotes,
} from "../redux";

const titles = ["Name", "Created", "Category", "Content", "Dates"];

export function useNotesTable(): TableProps {
  const dispatch = useDispatch();
  const notes = useSelector(selectActiveNotes);

  const headProps: TableProps["headProps"] = useMemo(
    () => ({
      data: titles,
      actions: [
        {
          icon: "icon-archive",
          onClick: () => {
            dispatch(archiveAllNotes());
          },
        },
        {
          icon: "icon-delete",
          onClick: () => {
            dispatch(deletaAllActiveNotes());
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
              icon: "icon-edit",
              onClick: () => dispatch(openEditor(id)),
            },
            {
              icon: "icon-archive",
              onClick: () => dispatch(archiveNote(id)),
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
