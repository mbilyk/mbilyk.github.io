import React, { Component } from 'react';
import styles from './Welcome.module.scss';
import './styles.scss';
import { CSSTransition } from 'react-transition-group';

import InputBox from '../InputBox/InputBox';
import MsgBox from '../MsgBox/MsgBox';


export default class Welcome extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      inputFocused: false,
      activeChild: 0,
      transition: true
    }
    this.msgRef = React.createRef();
    this.nodeRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this._isMounted = false;
  }

  handleChange(e) {
    var newVal = String(e.target.value)
    this.setState({
      value: newVal,
    });
    if (newVal.toLowerCase() === 'hello') {
      this._isMounted = false;
      this.setState({transition:false})
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this.msgRef.current.props.children.forEach((kid,i) => {
      setTimeout(() => {
        if (this._isMounted) {
          this.setState({
            activeChild: i
          })
        }
      }, 3000*i);
    });
  }

  componentWillUnmount(){
    this._isMounted = false;
  }
  
  render() {
    return (
      <CSSTransition
        in={this.state.transition} 
        timeout={500}
        nodeRef={this.nodeRef}
        classNames='welcome'
        onExited={()=>{this.props.onReturn()}}
      >
        <div className={styles.Welcome} ref={this.nodeRef} data-testid='Welcome'>
          <MsgBox ref={this.msgRef} activeChild={this.state.activeChild}>
            <span>Hi 👋</span>
            <span>Welcome to Michael Bilyk's website</span>
            <span>Type <strong>Hello</strong> to enter</span>
          </MsgBox>
          <InputBox
            onChange={this.handleChange}
            onBlur={()=>{this.setState({inputFocused: false})}}
            onFocus={()=>{this.setState({inputFocused: true})}}
            value={this.state.value}
            focused={this.state.inputFocused}
          />
        </div>
      </CSSTransition>
    )
  }
}