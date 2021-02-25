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
  }
  

  addNote(subject) {
    var newNote = {title: subject, text: "", x: 0, y: 0};
    //create an id
    const mapNote = Map(newNote);
    let key = "id " + nanoid();
    
    const newerMap = this.state.notes.set(key, mapNote);
    
  }

  render() {
    return (
      <div>
        <div>
          <Form addNote={this.addNote}/>
        </div>

        <div>

        </div>
      </div>
    );
  }
}

export default App