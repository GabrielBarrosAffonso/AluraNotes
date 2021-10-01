import React, { Component } from "react";
import "./style.css"

class NotesForm extends Component{

    constructor(props){
        super(props);
        this.title="";
        this.text=""
        this.category="No Category"
    };

    handleChangeTitle(event){
        event.stopPropagation();
        this.title = event.target.value
    }

    handleChangeText(event){
        event.stopPropagation();
        this.text = event.target.value
    }

    handleChangeCategory(event){
        event.stopPropagation();
        this.category = event.target.value
    }

    createNote(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category)
    }

    render(){
        return(
            <form className="notes-form" onSubmit={this.createNote.bind(this)}>
                <h1 className="notes-main-title">YOUR NOTES LIST</h1>
                <input className="notes-input" type="text" placeholder="Título" onChange={this.handleChangeTitle.bind(this)}/>
                <textarea className="notes-textarea" placeholder="Escreva sua Nota" name="" id="" cols="30" rows="10" onChange={this.handleChangeText.bind(this)}></textarea>
                <select className="notes-category-input notes-input" onChange={this.handleChangeCategory.bind(this)}>
                    <option value="Sem Categoria">Sem Categoria</option>
                    {this.props.categories.map((category, index) => {
                        return(<option key={index} value={category}>{category}</option>)
                    })}
                </select>
                <button className="notes-form-button">Criar Nota</button>
            </form>
        )
    }
}

export default NotesForm