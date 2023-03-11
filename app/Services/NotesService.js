import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"

class NotesService {
  setActive(newActive) {
    let newActiveNote = appState.notes.find(note => newActive == note.id)
    appState.activeNote = newActiveNote
  }
  saveNote(text) {
    // console.log(text)
    let editedNote = appState.activeNote
    editedNote.note = text
    appState.emit('activeNote')
    saveState('noteFiles', appState.notes)
  }
  addNote(newNoteData) {
    let newNote = new Note(newNoteData)
    // console.log('hello from service', newNote);
    appState.notes.push(newNote)
    appState.emit('notes')

  }

  deleteNote(deleted) {
    // console.log(deleted);
    let deletedNote = appState.notes.find(note => deleted.id == note.id)

  }



}


export const notesService = new NotesService()