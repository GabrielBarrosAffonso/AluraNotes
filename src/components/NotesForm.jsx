import React, { Component } from "react";

class NotesForm extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Título"/>
                <textarea placeholder="Escreva sua Nota" name="" id="" cols="30" rows="10"></textarea>
                <button>Criar Nota</button>
            </form>
        )
    }
}

export default NotesForm