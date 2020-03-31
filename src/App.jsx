import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/projects/:id" component={Project} />
    </div>
  );
}

export default App;
