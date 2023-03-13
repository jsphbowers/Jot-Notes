import { generateId } from "../Utils/generateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.created = data.created ? new Date(data.created) : new Date()
    this.saved = data.saved ? new Date(data.saved) : new Date()
    this.type = data.type
    this.note = data.note || 'Nothing yet'
  }

  get navTemplate() {
    return `
    <div class="card p-3 elevation-5" onclick="app.notesController.setActive('${this.id}')">
                <div class="p-2 d-flex justify-content-between">
                  <h5>${this.title}</h5>
                  <h5 style="color: ${this.color};"><i class="mdi mdi-circle"></i></h5>
                </div>
                <div>
                <p>
                  <p>${this.ComputeDate}</p>
                  <p>${this.ComputeSaveDate}</p>
                  <p>${this.type}</p>
                </div>
                </div>
    `
  }

  get activeTemplate() {
    return `
    <section class="row">
    <div class="col-12 text-end p-2">
      <button class="btn btn-primary" onclick="app.notesController.saveNote('${this.id}')"><i
          class="mdi mdi-content-save"></i></button>
          <button class="btn btn-danger" onclick="app.notesController.deleteNote('${this.id}')"><i class="mdi mdi-cancel"></i></button>
    </div>
    <div class="card p-3 activeCard">
      <div class="p-2 d-flex justify-content-between">
        <h5>${this.title}</h5>
        <h5 style="color: ${this.color};"><i class="mdi mdi-circle"></i></h5>
      </div>
      <div>
        <p>${this.ComputeDate}</p>
        <p>${this.ComputeSaveDate}</p>
      </div>
    </div>
    <textarea class="note elevation-2" name="note" id="note" cols="100" rows="10"
      placeholder="write that down! write that down!">${this.note}</textarea>
    <div class="col-12">

    </div>

  </section>
  `
  }

  get ComputeDate() {
    let date = this.created
    return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear()) + ' ' + (date.getHours()) + ':' + (date.getMinutes())

  }

  get ComputeSaveDate() {
    let date = this.saved
    return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear()) + ' ' + (date.getHours()) + ':' + (date.getMinutes())
  }
}