import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.Contact} data-testid="Contact">
    <p>You can email me at <a href='mailto: michael.bilyk@hey.com' >Michael.Bilyk@Hey.com</a></p>
    <p>Or connect with me on <a href='https://www.linkedin.com/in/mbilyk/'>LinkedIn</a></p>
    <p>You can see some of my projects on <a href='https://www.github.com/mbilyk'>GitHub</a></p>
  </div>
);

export default Contact;
