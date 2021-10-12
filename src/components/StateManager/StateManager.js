import React from 'react';
import PropTypes from 'prop-types';
import Welcome from '../Welcome/Welcome'
import MainPage from '../MainPage/MainPage';

const StateManager = (props) => {
  const { nextState, onReturn } = props;
  if (nextState === 'Welcome') {
    return <Welcome onReturn={onReturn} />
  } else if (nextState === 'MainPage') {
    return <MainPage />
  }
  return <span>What are you doing? Get out of here!</span>
};

StateManager.propTypes = {
  nextState: PropTypes.string,
};

StateManager.defaultProps = {};

export default StateManager;
