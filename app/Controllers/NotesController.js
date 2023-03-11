import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawNotesList() {
  // console.log(appState.notes)
  let template = ''
  appState.notes.forEach(note => template += note.navTemplate)
  setHTML('notesList', template)
  appState.on('notes', _drawNotesList)
}

function _drawActiveNote(clickedId) {
  let activeNote = appState.activeNote
  let activeTemplate = ''
  activeTemplate += activeNote.activeTemplate
  setHTML('active', activeTemplate)
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
    appState.on('activeNote', _drawActiveNote)
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

  setActive(clickedId) {
    // console.log(noteId)
    let newActive = clickedId
    notesService.setActive(newActive)
  }

  saveNote() {

    let note = document.querySelector('.note')
    // console.log(note.value);
    notesService.saveNote(note.value)
  }

  async deleteNote(noteId) {
    if (await Pop.confirm("Are you sure you wanna delete this note?")) {
      notesService.deleteNote(noteId)
    }
  }
}

