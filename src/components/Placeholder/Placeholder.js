import React from 'react';
import styles from './Placeholder.module.scss';

const Placeholder = () => (
  <div className={styles.Placeholder} data-testid="Placeholder">
    <h1>Welcome</h1>
    <p>This website is currently under construction</p>
    <p>
      You can contact me at <a href='mailto: michael.bilyk@hey.com' >michael.bilyk@hey.com</a><br/>
      or connect with me on <a href='https://www.linkedin.com/in/mbilyk/'>LinkedIn</a>
    </p>
    <p>
      This app was built in React<br/>
      The source code can be found <a href='https://github.com/mbilyk/mbilyk.github.io/'>here</a>
    </p>
  </div>
);

Placeholder.propTypes = {};

Placeholder.defaultProps = {};

export default Placeholder;
