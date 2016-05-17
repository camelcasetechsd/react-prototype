import React from 'react';
import {render} from 'react-dom';
import {Note} from './Note.js';
import {ResponseHelper} from './../../../utilities/js/ResponseHelper.js';
import {RequestHelper} from './../../../utilities/js/RequestHelper.js';
import 'whatwg-fetch';

export class NoteList extends React.Component {

  render () {
    var noteNodes = this.props.data.map(function(note) {
      return (
        <Note title={note.title} id={note.id} key={note.id} onNoteEdit={this.props.onNoteEdit} onNoteDelete={this.props.onNoteDelete}>
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
