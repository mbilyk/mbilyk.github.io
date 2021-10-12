import React, { Component } from 'react';
import styles from './MsgBox.module.scss';
import './styles.scss';
import { CSSTransition } from 'react-transition-group';

export default class MsgBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: true,
      child: this.props.children[this.props.activeChild]
    }
    this.nodeRef = React.createRef();
    this.updateMsg = this.updateMsg.bind(this)
  }

  updateMsg() {
    this.setState({transition:false})
    setTimeout(() => {
      this.setState({
        child: this.props.children[this.props.activeChild],
        transition: true,
      })
    }, 500);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeChild !== this.props.activeChild) {
      this.updateMsg()
    }
  };

  render() {
    return (
      <div className={styles.MsgBox} data-testid="MsgBox">
        <CSSTransition
          appear={true}
          nodeRef={this.nodeRef}
          in={this.state.transition} 
          timeout={2000} 
          classNames='msg'
        >
          <span className={styles.message} ref={this.nodeRef}>{this.state.child}</span>
        </CSSTransition>
    </div>
    )
  }
}
