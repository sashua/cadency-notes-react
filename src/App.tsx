import { useDispatch, useSelector } from "react-redux";
import { Button, Editor, Modal } from "./components";
import {
  closeArchive,
  closeEditor,
  openArchive,
  openEditor,
  selectArchiveOpened,
  selectEditorOpened,
} from "./redux";

export function App() {
  const dispatch = useDispatch();
  const archiveOpened = useSelector(selectArchiveOpened);
  const editorOpened = useSelector(selectEditorOpened);

  return (
    <main className="max-w-6xl px-4 py-10 mx-auto text-slate-600">
      <h1 className="hidden">Radency Notes + React</h1>

      <section className="pb-10 mb-10 border-b-2 border-dashed border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Notes</h2>
          <Button icon="icon-add" onClick={() => dispatch(openEditor())}>
            New note
          </Button>
        </div>
      </section>

      <section id="categories">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Categories</h2>
          <Button icon="icon-unarchive" onClick={() => dispatch(openArchive())}>
            Open archive
          </Button>
        </div>
      </section>

      {editorOpened && (
        <Modal
          className="w-full max-w-4xl"
          title="Note"
          onClose={() => dispatch(closeEditor())}
        >
          <Editor />
        </Modal>
      )}

      {archiveOpened && (
        <Modal title="Archive" onClose={() => dispatch(closeArchive())}>
          !!!
        </Modal>
      )}
    </main>
  );
}
