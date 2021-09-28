import React, { Component } from 'react';
import "./assets/App.css"
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

class App extends Component {

  constructor(){
    super();
    this.notes = [];
  }

  createNote(title, text){
    const newNote = {
      title, 
      text
    }
    this.notes.push(newNote)
    console.log(this.notes.length)
  }

  render(){
    return (
      <div className="App">
        <h1 className="notes-main-title">Your Note List</h1>
        <NotesForm createNote={this.createNote.bind(this)} />
        <NotesList notes={this.notes}/>
      </div>
    );
  }
}
// react -> lib
// React -> Ecossistema
export default App;
