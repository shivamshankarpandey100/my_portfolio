import React from 'react';

import Intro from './components/intro';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Blogs from './components/blogs';
import Contact from './components/contact';
import './App.scss';

const App = () => {
  return (
    <div>
        <Intro/>
        <Skills/>
        <Portfolio/>
        <Blogs/>
        <Contact/>
    </div>
  )
}

export default App;