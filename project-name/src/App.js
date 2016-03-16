import React, { Component } from 'react';

export default class App extends Component {

  var red : {
    backgroundColor = "blue"
  },

  render() {
    return (
      <div>
        <div>
          <button>Team 1</button><button>Team 2</button>
        </div>
        <div>
          <input placeholder="Player name"/>
          <button>Add</button>
        </div>
        <div>
          <div>Team 1 :</div>
          <li>Dave</li>
          <li>Steve</li>
          <li>Mike</li>
          <li>Harry</li>
          <div>Team 2 :</div>
          <li>Jill</li>
          <li>Jane</li>
          <li>Sue</li>
          <li>Suzie</li>
        </div>
      </div>
    );
  }
}
