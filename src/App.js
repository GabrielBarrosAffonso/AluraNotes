import React, { Component } from 'react';
import "./assets/App.css"
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 className="notes-main-title">Your Note List</h1>
        <NotesForm />
        <NotesList />
      </div>
    );
  }
}
// react -> lib
// React -> Ecossistema
export default App;
