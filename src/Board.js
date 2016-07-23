import React, { Component } from 'react';
import Note from './Note'
import './Todo.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  add(text) {
    let arr = this.state.notes;
    arr.push(text);
    this.setState({notes: arr});
  }

  update(newText, i) {
    let arr = this.state.notes;
    arr[i] = newText;
    this.setState({notes: arr});
  }

  remove(i) {
    let arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({notes: arr});
  }

  eachNote(note, i) {
    return (<Note key={i}
              index={i}
              onChange={this.update}
              onRemove={this.remove}
              >{note}</Note>);
  }

  render() {
    return (
      <div className="Board">
        {this.state.notes.map(this.eachNote)}
        <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null, "New Note")} />

      </div>
    );
  }
}

export default Board;