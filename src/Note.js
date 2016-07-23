import React, { Component } from 'react';
import './App.css';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing:false
    }
  }

  onEdit() {
    this.setState({editing:true});
  }

  save() {
    this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);

    this.setState({editing: false});
  }

  remove() {
    this.props.onRemove(this.props.index);
  }

  renderForm() {
    return (
      <div className="note">
        <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk note-btn" />
      </div>
    )
  }

  renderDisplay() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil note-btn" />
            <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash note-btn" />
        </span>
      </div>
      )
  }

  render() {
    if(this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

export default Note;


