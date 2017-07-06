import React, {Component} from 'react';
import Note from "./Note";

class Notes extends Component {
  state = {
    notes: [
      'Note#1',
      'Note#2',
      'Note#3'
    ]
  };

  onNoteChange = (index, note) => {
    this.setState(prevState => {
      const {notes} = prevState;
      return {
        notes: [
          ...notes.slice(0, index),
          note,
          ...notes.slice(index + 1)
        ]
      }
    })
  };

  render() {
    return (
      <ul>
        {
          this.state.notes.map(
            (note, index) => (
              <Note
                key={index}
                index={index}
                note={note}
                onNoteChange={this.onNoteChange}/>
            )
          )
        }
      </ul>
    )
  };
}

export default Notes;
