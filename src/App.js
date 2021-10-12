import './App.scss';
import React, { Component } from 'react';

import StateManager from './components/StateManager/StateManager'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateIndex: 0,
      nextState: 'Welcome',
    }
    this.changeState = this.changeState.bind(this)
    this.stateArray = [
      'Welcome',
      'MainPage'
    ]
  }

  changeState() {
    const newStateIndex = this.state.stateIndex + 1;
    if(newStateIndex >= this.stateArray.length){
      // Wrap-around stateArray
      this.setState({
        nextState: this.stateArray[0],
        stateIndex: 0
      });
    } else {
      // Go to next
      this.setState({
        nextState: this.stateArray[newStateIndex]
      })
    } 
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <StateManager nextState={this.state.nextState} onReturn={this.changeState} />        
      </header>
    </div>
    )
  }
}
