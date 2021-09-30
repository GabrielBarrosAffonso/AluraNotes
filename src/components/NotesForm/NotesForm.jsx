import React, { Component } from "react";
import "./style.css"

class NotesForm extends Component{

    constructor(props){
        super(props);
        this.title="";
        this.text=""
    };

    handleChangeTitle(event){
        event.stopPropagation();
        this.title = event.target.value
    }

    handleChangeText(event){
        event.stopPropagation();
        this.text = event.target.value
    }

    createNote(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text)
    }

    render(){
        return(
            <form className="notes-form" onSubmit={this.createNote.bind(this)}>
                <h1 className="notes-main-title">YOUR NOTES LIST</h1>
                <input className="notes-input" type="text" placeholder="Título" onChange={this.handleChangeTitle.bind(this)}/>
                <textarea className="notes-textarea" placeholder="Escreva sua Nota" name="" id="" cols="30" rows="10" onChange={this.handleChangeText.bind(this)}></textarea>
                <button className="notes-form-button">Criar Nota</button>
            </form>
        )
    }
}

export default NotesForm