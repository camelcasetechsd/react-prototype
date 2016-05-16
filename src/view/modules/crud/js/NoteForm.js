import React from 'react';
import {render} from 'react-dom';

export class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var body = this.state.body.trim();
    if (!body || !title) {
      return;
    }
    this.props.onNoteSubmit({title: title, body: body});
    this.setState({title: '', body: ''});
  }

  render() {
    return (
      <div className="row">
        <form className="col-md-2" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Note title"
              value={this.state.title}
              onChange={this.handleTitleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Note body..."
              value={this.state.body}
              onChange={this.handleBodyChange}
              className="form-control"
            />
          </div>
          <input type="submit" value="Post" className="btn btn-default"/>
        </form>
      </div>
    );
  }
}
