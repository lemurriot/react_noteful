export const findCurrentNote = (notes, noteId) => {
  const currentNote = notes.find(note => note.id === noteId);
  return currentNote
    ? currentNote
    : {
        id: 5000,
        note_title: "stub_title",
        date_modified: "2019-09-16T09:04:31.852Z"
      };
};

export const findCurrentFolder = (folders, noteId, notes) => {
  const stubFolder = { id: 5000, folder_title: "none" };
  const getNote = findCurrentNote(notes, noteId);
  console.log(getNote, folders)
  const currentFolderId = getNote.folder_id;
  const currentFolder = folders.find(folder => folder.id === currentFolderId);
  return currentFolder ? [currentFolder] : [stubFolder];
};

export const findCurrentFolderSelection = (folders, notes, folderId) => {
  const currentFolder = folders.find(folder => folder.id === folderId) || {};
  console.log(notes)
  const currentNotes =
    notes.filter(note => note.folder_id === currentFolder.id) || {};
  return {
    folder: currentFolder ? currentFolder : {},
    notes: currentNotes ? currentNotes : {}
  };
};
