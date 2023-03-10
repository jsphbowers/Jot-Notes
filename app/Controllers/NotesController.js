import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawNotesList() {
  // console.log(appState.notes)
  let template = ''
  appState.notes.forEach(note => template += note.navTemplate)
  setHTML('notesList', template)
  appState.on('notes', _drawNotesList)
}



export class NotesController {
  constructor() {
    _drawNotesList()
  }

  createNote() {
    // console.log('newNote')
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = event.target
    // console.log(form)
    let newNote = getFormData(form)
    // console.log(newNote)
    notesService.addNote(newNote)
  }

  saveNote() {
    window.event?.preventDefault()
    console.log("we saving")
  }
}