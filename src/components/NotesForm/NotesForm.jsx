import React, { Component } from "react";
import "./style.css"

class NotesForm extends Component{

    constructor(){
        super();
        this.titulo="";
    };

    handleChangeTitle(event){
        this.titulo = event.target.value
        console.log(this.titulo)
    }

    render(){
        return(
            <form className="notes-form">
                <input className="notes-input" type="text" placeholder="Título" onChange={this.handleChangeTitle.bind(this)}/>
                <textarea className="notes-textarea" placeholder="Escreva sua Nota" name="" id="" cols="30" rows="10"></textarea>
                <button className="notes-form-button">Criar Nota</button>
            </form>
        )
    }
}

export default NotesForm