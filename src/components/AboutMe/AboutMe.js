import React from 'react';
import styles from './AboutMe.module.scss';
import profile from './profile.png'

const AboutMe = () => (
  <div className={styles.AboutMe} data-testid="AboutMe">
    <p><img src={profile} alt="Man in Hawaiian shirt with long hair and a sick mustache" /></p>
    <span className={styles.content}><p>My name is Michael Bilyk. I'm a software engineer based out of Austin, Texas. With over 6 years of experience in support and development, I am skilled at learning in order to solve complex problems and maintaing a user first mindset during design and development.</p><p>I am a big fan of design 📐 roller skating 🛼 and improv comedy 🎭. In my free time I play video games and design role playing games.</p></span>
  </div>
);

export default AboutMe;
