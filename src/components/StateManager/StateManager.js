import React from 'react';
import PropTypes from 'prop-types';
import Welcome from '../Welcome/Welcome'
import MainPage from '../MainPage/MainPage';

const StateManager = (props) => {
  const { nextState, onReturn } = props;
  switch(nextState) {
    case 'Welcome':
      return <Welcome onReturn={onReturn} />
    case 'MainPage':
      return <MainPage onReturn={onReturn} placeholder={true}/>
    default: 
      return <span>What are you doing? Get out of here!</span>
  }
};

StateManager.propTypes = {
  nextState: PropTypes.string,
};

StateManager.defaultProps = {};

export default StateManager;
