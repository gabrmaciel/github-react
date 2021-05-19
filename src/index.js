import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Nav from './Nav'
import Section from './Section'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Section />
  </React.StrictMode>,
  document.getElementById('root')
);
