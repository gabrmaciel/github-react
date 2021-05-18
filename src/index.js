import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Nav from './Nav'
import Header from './Header'
import Section from './Section'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Section />
    
  </React.StrictMode>,
  document.getElementById('root')
);
