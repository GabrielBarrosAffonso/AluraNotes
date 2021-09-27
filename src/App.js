import React, { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NotesForm />
        <NotesList />
      </div>
    );
  }
}
// react -> lib
// React -> Ecossistema
export default App;
