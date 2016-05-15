import React from 'react';
import {render} from 'react-dom';
import marked from 'marked';

export class Comment extends React.Component {
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
  render () {
    return (
      <div className="dialogbox comment">
        <div className="body">
          <span className="tip tip-up" />
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
          <h5 className="message commentAuthor">
            By {this.props.author}
          </h5>
        </div>
      </div>
    );
  }
}
