import React from 'react';
import {render} from 'react-dom';

export class CommentStructure extends React.Component {
  render () {
    return (
      <div>
        <h4>Comment Structure:</h4>
        <ul>
          <li>CommentBox
            <ul>
              <li>CommentList
                <ul>
                  <li>Comment</li>
                </ul>
              </li>
              <li>CommentForm</li>
            </ul>
          </li>
        </ul>
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
