import React from 'react';
import {render} from 'react-dom';

export class CommentStructure extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <h4>Comment Structure:</h4>
          <ul className="list-group">
            <li className="list-group-item">CommentBox
              <ul className="list-group">
                <li className="list-group-item">CommentList
                  <ul className="list-group">
                    <li className="list-group-item">Comment</li>
                  </ul>
                </li>
                <li className="list-group-item">CommentForm</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

var commentsStructureElement = document.getElementById('commentsStructure');
if(commentsStructureElement){
  render(
    <CommentStructure/>,
    commentsStructureElement
  );
}
