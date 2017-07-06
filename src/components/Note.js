import React, {PureComponent} from 'react';
/*import shallowCompare from "./shallowCompare";*/

class Note extends PureComponent {

  /* if use Component
  PureComponent ต้องแน่ใจว่า nextProps และ nextState กับ render ต้องเป็นค่าเดียวกันเสมอ
  shouldComponentUpdate = (nextProps, nextState) => {
    return shallowCompare(this, nextProps, nextState);
  };*/

  componentWillUpdate() {
    console.log('Will Update!');
  };

  handleChange = event => {
    const {index, onNoteChange} = this.props;
    onNoteChange(index, event.target.value);
  };

  render() {
    const {note} = this.props;
    return (
      <li>
        <input
          type="text"
          defaultValue={note}
          onChange={this.handleChange}/>
        <p>{note}</p>
      </li>
    )
  };
}

export default Note;