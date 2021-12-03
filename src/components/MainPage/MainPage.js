import React, { Component } from 'react'
import styles from './MainPage.module.scss';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Opening from '../Opening/Opening';
import Experience from '../Experience/Experience';

export default class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: 'opening'
    }
  }

  content(){
    switch (this.state.content) {
      case 'opening':
        return <Opening />
      case 'about':
        return <AboutMe />
      case 'contact':
        return <Contact />
      case 'experience':
        return <Experience />
      default:
        return <div>{this.state.content}</div>
    }
  }

  render() {
    return (
      <div className={styles.MainPage} data-testid="MainPage">
        <div className={styles.sidenav}>
          <button onClick={() => this.setState({content:'experience'})}>Experience</button>
          <button onClick={() => this.setState({content:'about'})}>About Me</button>
          <button onClick={() => this.setState({content:'contact'})}>Contact</button>
        </div>
        <div className={styles.contentContainer}>
          {this.content()}
        </div>
      </div>
    )
  }
}