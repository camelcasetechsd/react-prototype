import React from 'react';
import {render} from 'react-dom';
import {Comment} from './Comment.js';

export class CommentList extends React.Component {
  render () {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
