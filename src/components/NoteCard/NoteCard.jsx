import React from 'react';
import "./style.css"
import {ReactComponent as DeleteSVG} from "../../assets/images/deleteIcon.svg"
// import deleteSVG from "../../assets/images/deleteIcon.svg"

class NoteCard extends React.Component {

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
                <DeleteSVG onClick={this.delete.bind(this)}/>
            </section>
        );
    }
}
 
export default NoteCard ;