import { generateId } from "../Utils/generateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.color = data.color
    this.date = data.date ? new Date(data.date) : new Date()
    this.type = data.type
  }
}