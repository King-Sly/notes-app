import React, {Component} from "react";
import './App.css';
import Form from "./Components/Form";
import {Map} from 'immutable';
import { nanoid } from "nanoid";


class App extends Component {
  constructor(){
    super();

    this.state={
      notes: Map()
    }

    this.addNote = this.addNote.bind(this);
    // this.deleteNote = this.deleteNote.bind(this);
  }
  
  // deleteNote(id) {
  //   this.setState(prevState => ({
  //     notes: prevState.notes.delete(id),
  //   }));
  // }

  addNote(subject) {
    console.log("DDDDDDD");
    var newNote = {title: subject, text: "", x: 0, y: 0};
    var key = "id " + nanoid();

    this.setState(prevState => ({
      notes: prevState.notes.set(key, newNote)
    }));
  }

  render() {
    return (
      <div>
        <div>
          <Form addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default App