import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.scss';

const Experience = () => (
  <div className={styles.Experience} data-testid="Experience">
    <h1>Senior Product Support Engineer</h1>
      <h2>Aunt Bertha, a Public Benefit Corporation</h2>
      <p>Investigate bugs, and develop fixes in Javascript, Python, WebApp2, MySQL to support a 7 million user web-application with a large code base. Develop React and Python apps to aid the success team in completing business tasks.</p>
      <h3>Front-End Development Task Force (React, Nx, StencilJs, Sass)</h3>
      <ul>
        <li>Stood-up new Nx build framework proving out and polishing new UI development process.</li>
        <li>Developed app and component generators to ensure front-end design and development coherence</li>
        <li>Built React web page utilizing UI component libraries built with StencilJS.</li>
      </ul>
    <h1>Software Engineer</h1>
      <h2>National Instruments</h2>
      <p>Rapidly design and develop web tools for strategic initiatives. Define and implement DevOps processes in Azure to improve development efficiency.</p>
    <h1>Staff Application Engineer</h1>
      <h2>National Instruments</h2>
      <p>Develop proof-of-concepts, demos, and tools for high-value opportunities in Automotive Hardware in the Loop Test. Develop and maintain DevOps tools for open source tools page. Gather target application insights from customers to be provided as feedback to R&D.</p>
    <h1>Staff Technical Support Engineer</h1>
      <h2>National Instruments</h2>
      <p>Technical Support for RF and Mixed Signals, Test and Measurement applications and RF prototyping on Software Define Radios. Sales enablement in the form of technical consulting, proof-of-concept and system demoing Develop customer facing materials such as demos and demo guides, white-papers, application notes. Coach and develop colleagues professionally and technically</p>
    <h1>Design and Development Electrical Engineering Coop</h1>
      <h2>Lutron Electronics</h2>
      <p> Worked as an electrical engineer in Aesthetics, Cognition and Ergonomics department on new product development. Created and qualified an antenna for a Lutron product: the Radio Window Sensor - Window Mount. Worked with supply chain and created a lifetime qualification plan to find less expensive, better parts for a cost reduction effort.</p>
    </div>
);

export default Experience;
