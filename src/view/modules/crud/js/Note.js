import React from 'react';
import {render} from 'react-dom';
import marked from 'marked';

export class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  handleSubmit(e) {
    e.preventDefault();
    var id = this.props.id.trim();
    this.props.onNoteDelete(id);
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-2 note">
          <h5>
            {this.props.title}
          </h5>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Delete" className="btn btn-danger"/>
          </form>
        </div>
      </div>
    );
  }
}
