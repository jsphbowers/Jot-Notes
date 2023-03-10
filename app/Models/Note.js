import { generateId } from "../Utils/generateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.created = data.created ? new Date(data.created) : new Date()
    this.saved = data.saved || 'Not Saved'
    this.type = data.type
  }

  get navTemplate() {
    return `
                <div class="p-2 d-flex justify-content-between">
                  <h5>${this.title}</h5>
                  <h5>${this.color}</h5>
                </div>
                <div>
                  <p>${this.ComputeDate}</p>
                  <p>${this.saved}</p>
                </div>
    `
  }

  get ComputeDate() {
    let date = this.created
    return (date.getMonth() + 1) + '/' + (date.getDate) + '/' + (date.getFullYear)

  }
}