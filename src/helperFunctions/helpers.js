export const findCurrentNote = (notes, noteId) => {
    const currentNote = notes.find(note => note.id === noteId)
    return currentNote ? currentNote : {}
  }

export const findCurrentFolder = (folders, noteId, notes) => {
    const stubFolder = {id: "none", name: "none"}
    const getNote = findCurrentNote(notes, noteId)
    const currentFolderId = getNote.folderId
    const currentFolder = folders.find(folder => folder.id === currentFolderId)
    return currentFolder ? [currentFolder] : [stubFolder]
  }

export const findCurrentFolderSelection = (folders, notes, folderId) => {
  console.log(folders, notes, folderId)
    const currentFolder = folders.find(folder => folder.id === folderId) || {}
    const currentNotes = notes.filter(note => note.folderId === currentFolder.id) || {}
    return {
      folder: currentFolder ? currentFolder : {},
      notes: currentNotes ? currentNotes : {}
    }
  }