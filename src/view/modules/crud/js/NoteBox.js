import React from 'react';
import {render} from 'react-dom';
import {NoteList} from './NoteList.js';
import {NoteForm} from './NoteForm.js';
import {ResponseHelper} from './../../../utilities/js/ResponseHelper.js';
import {RequestHelper} from './../../../utilities/js/RequestHelper.js';
import 'whatwg-fetch';
var config = require('config');

export class NoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this.handleNoteEdit = this.handleNoteEdit.bind(this);
    this.loadNotesFromServer = this.loadNotesFromServer.bind(this);
  }

  loadNotesFromServer() {
    fetch(this.props.url, {
        cache: "no-cache"
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

  componentDidMount() {
    this.loadNotesFromServer();
  }

  handleNoteSubmit(note) {
    var notes = this.state.data;
    fetch(this.props.url, {
        method: 'POST',
        body: RequestHelper.serialize(note),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cache: "no-cache",
      })
      .then(ResponseHelper.checkStatus)
      .then(function(response) {
        response.json().then(function(data){
          this.setState({data: data});
        }.bind(this));

      }.bind(this)).catch(function(error) {
        this.setState({data: notes});
        console.error(this.props.url, status, error.toString());
      }.bind(this));
  }

  handleNoteEdit(newNote) {
    var notes = this.state.data;
    var id = newNote.id;
    fetch(this.props.url + '&id=' + id, {
        method: 'PUT',
        body: RequestHelper.serialize(newNote),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cache: "no-cache",
      })
      .then(ResponseHelper.checkStatus)
      .then(function(response) {
        response.json().then(function(data){
          this.setState({data: data});
        }.bind(this));

      }.bind(this)).catch(function(error) {
        this.setState({data: notes});
        console.error(this.props.url, status, error.toString());
      }.bind(this));
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

  render() {
    return (
      <div>
        <h4>Notes:</h4>
        <NoteList data={this.state.data} onNoteEdit={this.handleNoteEdit} onNoteDelete={this.handleNoteDelete} />
        <NoteForm onNoteSubmit={this.handleNoteSubmit}/>
      </div>
    );
  }
}

var notesElement = document.getElementById('notes');
if(notesElement){
  render(
    <NoteBox url={config.routeBase + "/apiRouter.php?edge=notes"}/>,
    notesElement
  );
}
