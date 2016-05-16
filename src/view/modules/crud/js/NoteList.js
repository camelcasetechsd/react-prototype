import React from 'react';
import {render} from 'react-dom';
import {Note} from './Note.js';
import {ResponseHelper} from './../../../utilities/js/ResponseHelper.js';
import 'whatwg-fetch';

export class NoteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
  }

  componentDidUpdate(){
    this.state = {
      data: this.props.data
    };
  }

  handleNoteDelete(id) {
    var notes = this.state.data;
    fetch(this.props.url + '&id=' + id, {
        method: 'DELETE',
        cache: "no-cache",
      })
      .then(ResponseHelper.checkStatus)
      .then(function(response) {
        response.json().then(function(data){
          this.setState({data: data});
        }.bind(this));
      }.bind(this)).catch(function(error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this));
  }

  render () {
    if(this.state.data.length == 0){
      this.state.data = this.props.data
    }
    var noteNodes = this.state.data.map(function(note) {
      return (
        <Note title={note.title} id={note.id} key={note.id} onNoteDelete={this.handleNoteDelete}>
          {note.body}
        </Note>
      );
    }.bind(this));
    return (
      <div>
        {noteNodes}
      </div>
    );
  }
}
