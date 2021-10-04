import React, { Component } from 'react';
import "./assets/App.css"
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import CategoryList from './components/CategoryList';
import Categories from './data/Categories';
import NotesListData from './data/Notes';

class App extends Component {

  constructor(){
    super();
    this.categories = new Categories()
    this.notes = new NotesListData()
  }

  // CREATE CATEGORY
  // addCategory(value){
  //   const newCategoryArray = [...this.state.categories, value]
  //   const newState = {...this.state, categories:newCategoryArray};
  //   this.setState(newState)
  // }

  // CREATE NOTE
  // createNote(title, text, category){
  //   const newNote = { title, text, category };
  //   const newNotesArray = [...this.state.notes, newNote]
  //   const newState = {
  //     notes:newNotesArray
  //   }
  //   this.setState(newState)
  // }

  // DELETE
  // deleteNote(index){
  //   let notesArray = this.state.notes;
  //   notesArray.splice(index,1);
  //   this.setState({notes:notesArray})
  // }

  render(){
    return (
      <div className="App">
        <NotesForm createNote={this.notes.createNote.bind(this.notes)} categories={this.categories} />
        <CategoryList categories={this.categories} addCategory={this.categories.addCategory.bind(this.categories)}/>
        <NotesList notes={this.notes} deleteNote={this.notes.deleteNote.bind(this.notes)}/>
      </div>
    );
  }
}
// react -> lib
// React -> Ecossistema
export default App;
