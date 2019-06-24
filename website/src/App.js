import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Header from './Header/Header.js';
import Content from './Content/Content.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
