import React from 'react';
import {render} from 'react-dom';

export class HelloWorld extends React.Component {
  render () {
    return (
      <p>
        Hello world,
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
}

var exampleElement = document.getElementById('example');
if(exampleElement){
  render(
    <HelloWorld date={new Date()} />,
    exampleElement
  );
}
