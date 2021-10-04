
class NotesListData {
    constructor(){
        this.notes = []
        this._subscribers = []
    }

    createNote(title, text, category){
        const newNote = new Note(title, text, category)
        this.notes.push(newNote)
    }

    deleteNote(index){
        this.notes.splice(index, 1)
    }

    notify(){
        this._subscribers.forEach(func => func(this.categories))
    }

    addCategory(newCategory){
        this.categories.push(newCategory)
    }
}

class Note{
    constructor(title, text, category){
        this.title = title
        this.text = text
        this.category = category
    }
}

export default NotesListData