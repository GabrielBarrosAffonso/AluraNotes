import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css"

class NotesList extends Component{
    render(){
        return(
            <ul className="note-list">
                {
                    Array.of("Trabalho", "Trabalho", "Estudo", "Casa").map((categoria, index) => {
                        return(
                            <li className="note-list-item" key={index}>
                                <div>{categoria}</div>
                                <NoteCard />
                            </li>
                        )
                    })
                }
            </ul> 
        )
    }
}

export default NotesList