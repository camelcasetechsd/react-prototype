import React from 'react';
import {render} from 'react-dom';

export class HelloWorld extends React.Component {
  render () {
    return (
      <p>
        Hello thereererererer, <input type="text" placeholder="Your name here" defaultValue="asd" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
}

render(
  <HelloWorld date={new Date()} />,
  document.getElementById('example')
);
