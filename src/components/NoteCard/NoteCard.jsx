import React, { Component } from "react";
import "./style.css"
import {ReactComponent as DeleteSVG} from "../../assets/images/closeNote.svg"
// import deleteSVG from "../../assets/images/deleteIcon.svg"

class NoteCard extends Component {

    delete(){
        const indexMain = this.props.number
        this.props.deleteNote(indexMain)
    }

    render() { 
        return(
            <section className="note-card">
                <header className="note-card-header">
                    <h3 className="note-card-title">{this.props.title}</h3>
                </header>
                <p className="note-card-text">{this.props.text}</p>
                {/* <img src={deleteSVG} alt="Delete Card" /> */}
                <DeleteSVG className="delete-svg" onClick={this.delete.bind(this)}/>
                <h4>{this.props.category}</h4>
            </section>
        );
    }
}
 
export default NoteCard ;