import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <div>
      <Route exact path="/web_portfolio" component={Home} />
      <Route path="/web_portfolio/projects/:id" component={Project} />
    </div>
  );
}

export default App;
