import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"

class NotesService {
  addNote(newNoteData) {
    let newNote = new Note(newNoteData)
    // console.log('hello from service', newNote);
    appState.notes.push(newNote)
    appState.emit('notes')

  }




}


export const notesService = new NotesService()