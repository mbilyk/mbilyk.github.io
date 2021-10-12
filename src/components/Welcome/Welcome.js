import React, { Component } from 'react';
import styles from './Welcome.module.scss';

import InputBox from '../InputBox/InputBox';
import MsgBox from '../MsgBox/MsgBox';


export default class Welcome extends Component{
  constructor() {
    super();
    this.state = {
      value: '',
      inputFocused: false,
      activeChild: 0
    }
    this.msgRef = React.createRef();
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  componentDidMount(){
    this.msgRef.current.props.children.forEach((kid,i) => {
      setTimeout(() => {
        this.setState({
          activeChild: i
        })
      }, 3000*i);
    });
  }
  
  render() {
    return (
      <div className={styles.Welcome} data-testid='Welcome'>
        <MsgBox ref={this.msgRef} activeChild={this.state.activeChild}>
          <span>Hello!</span>
          <span>Welcome to Michael Bilyk's website</span>
          <span>Type "Hello" to enter</span>
          <span>Lets see what happens when I add another</span>
        </MsgBox>
        <InputBox
          onChange={this.handleChange}
          onBlur={()=>{this.setState({inputFocused: false})}}
          onFocus={()=>{this.setState({inputFocused: true})}}
          value={this.state.value}
          focused={this.state.inputFocused}
        />
      </div>
    )
  }
}