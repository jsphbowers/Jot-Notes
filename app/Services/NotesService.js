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

  deleteNote(noteId) {
    let filteredArray = appState.notes.filter((note) => note.id != noteId);
    appState.notes = filteredArray;
    console.log('new array in appstate', appState.notes)
    saveState('noteFiles', appState.notes)
  }



}


export const notesService = new NotesService()