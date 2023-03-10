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

function _totalNotes() {
  let grandTotal = 0
  appState.notes.forEach(note => grandTotal++)
  setHTML('total', grandTotal)
  appState.on('notes', _totalNotes)
}


export class NotesController {
  constructor() {
    _drawNotesList()
    _totalNotes()
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

  setActiveNote() {

  }

  saveNote() {
    window.event?.preventDefault()
    let note = document.querySelector('.note')
    // console.log(note.value);
    notesService.saveNote(note.value)


  }
}

