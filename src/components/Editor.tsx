import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Select, TextArea } from ".";
import { formatDate } from "../lib/helpers";
import { closeEditor, createNote } from "../redux";
import { selectCategories, selectEditingNote } from "../redux/selectors";

export function Editor() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const note = useSelector(selectEditingNote);

  const createdAt = note ? formatDate(note.createdAt) : null;
  const options = useMemo(
    () => categories.map((cat) => ({ text: cat.name, value: cat.id })),
    [categories]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const categoryId = formData.get("category") as string;
    const content = formData.get("content") as string;
    dispatch(createNote({ name, categoryId, content }));
  };

  return (
    <form
      className="w-full space-y-6"
      onSubmit={handleSubmit}
      onReset={() => dispatch(closeEditor())}
    >
      <div className="flex gap-6">
        <Input
          className="basis-2/3"
          name="name"
          type="text"
          placeholder="Name"
          defaultValue={note?.name}
          required
        />
        <Select
          className="basis-1/3"
          name="category"
          placeholder="Category"
          defaultValue={note?.categoryId}
          required
          options={options}
        />
      </div>

      <TextArea
        name="content"
        rows={8}
        placeholder="Content"
        defaultValue={note?.content}
      />

      <div className="flex items-center gap-4">
        <p className="mr-auto font-semibold text-slate-400">{createdAt}</p>
        <Button icon="icon-save" type="submit">
          {note ? "Save" : "Create"}
        </Button>
        <Button icon="icon-close" type="reset">
          Cancel
        </Button>
      </div>
    </form>
  );
}
