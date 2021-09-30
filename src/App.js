import React, { Component } from 'react';
import "./assets/App.css"
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import CategoryList from './components/CategoryList';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }

  createNote(title, text){
    const newNote = { title, text };
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes:newNotesArray
    }
    this.setState(newState)
  }

  deleteNote(index){
    let notesArray = this.state.notes;
    notesArray.splice(index,1);
    this.setState({notes:notesArray})
  }

  render(){
    return (
      <div className="App">
        <NotesForm createNote={this.createNote.bind(this)} />
        <CategoryList />
        <NotesList notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}/>
      </div>
    );
  }
}
// react -> lib
// React -> Ecossistema
export default App;
