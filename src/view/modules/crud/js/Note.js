import React from 'react';
import {render} from 'react-dom';
import marked from 'marked';

export class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editFlag: false };
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  handleDeleteSubmit(e) {
    e.preventDefault();
    var id = this.props.id;
    this.props.onNoteDelete(id);
  }

  handleEditSubmit(e) {
    e.preventDefault();
    this.setState( { editFlag: false } );
    this.props.onNoteEdit(this.state);
  }

  handleEditClick(e) {
    this.setState( { editFlag: true } );
  }

  handleCancelClick(e) {
    this.setState( { editFlag: false } );
  }

  componentDidMount() {
    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.children,
      editFlag: false
    };
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  render () {
    var noteContent;
    if ( this.state.editFlag === false ) {
      noteContent =
      <div className="col-md-2 note">
        <h5>
          {this.props.title}
        </h5>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <form onSubmit={this.handleDeleteSubmit}>
          <input type="button" value="Edit" onClick={this.handleEditClick} className="btn btn-primary"/>
          <input type="submit" value="Delete" className="btn btn-danger"/>
        </form>
      </div>;
    } else {
      noteContent =
      <div className="col-md-2 note">
        <form onSubmit={this.handleEditSubmit}>
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
          <input type="submit" value="Submit" className="btn btn-primary"/>
          <input type="button" value="Cancel" onClick={this.handleCancelClick} className="btn btn-danger"/>
          </form>
        </div>;
    }
    return (
      <div className="row">
        {noteContent}
      </div>
    );
  }
}
